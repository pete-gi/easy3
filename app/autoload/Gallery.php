<?php

class Gallery {

    function __construct() {
        $this->db = new \DB\Jig('app/data/');
        $this->mapper = new \DB\Jig\Mapper($this->db, 'galleries');
        $path = new Path();
        $this->galleriesDir = $path->gallery();
        if (is_dir($this->galleriesDir)) {
            $this->gallerylist();
        }
    }

    private function gallerylist() {
        $path = new Path();
        $scandir = scandir($this->galleriesDir);

        if (count($scandir) > 2) {
            foreach($scandir as $dir) {
                if ($dir !== '.' && $dir !== '..') {
                    if ($this->mapper->load(['@name = ?', $dir])) {
                        $this->$dir = $this->mapper['list'];
                    } else {
                        $this->$dir = [];
                        $this->listFiles($dir);
                        $this->mapper->insert();
                        $this->mapper['name'] = $dir;
                    }
                }
            }
            $this->mapper->save();
            return true;
        }
    }

    function create($name) {
        $path = new Path();
        if (!is_dir($path->gallery($name))) {
            return false;
        }
        $user = new User();
        $isAuth = $user->getAuth();
        $thumbPath = $path->galleryFile($name . '/vlb_thumbnails1');
        $imagePath = $path->galleryFile($name . '/vlb_images1');

        $html = '';
        $arr = [];
        if ($isAuth) {
            $html .= '<ul id="sortable" data-name="'. $name . '">';
        }

        foreach($this->$name as $file) {
            $filename = pathinfo($path->gallery($imagePath.'/'.$file), PATHINFO_FILENAME);
            if ($isAuth) {
                $html .= '<li id="'.$file.'" class="gallery-item">';
                $html .= "<button class='remove-item' data-href='".$path->base()."/delete' data-item='$file'><i class='fa fa-close'></i></button>";
                $html .= "<img src='$thumbPath/$file' alt='' title='$filename'>";
                $html .= '</li>';
            } else {
                $arr[] = [
                    'imagepath' => "$imagePath/$file",
                    'thumbpath' => "$thumbPath/$file",
                    'galleryname' => $name,
                    'filename' => $filename
                ];
                $html .= "<a href='$imagePath/$file' class='gallery-item' data-fancybox='$name'><img src='$thumbPath/$file' alt='' title='$filename'></a>";
            }
        }
        if ($isAuth) {
            $html .= '</ul>';
            $html .= '<button id="sortable-sort" data-href="' . $path->base() . '/sort" class="btn btn-primary">Sort</button>';
            $html .= '<button id="sortable-refresh" data-href="' . $path->base() . '/refresh" class="btn btn-warning">Refresh</button>';
        }
        if ($isAuth) {
            return $html;
        } else {
            echo json_encode($arr);
        }
    }

    function listFiles($galleryName) {
        $path = new Path();
        $this->mapper->load(['@name = ?', $galleryName]);
        $files = [];
        foreach(scandir($path->gallery($galleryName.'/vlb_images1')) as $file) {
            if ($file !== '.' && $file !== '..') {
                $files[] = $file;
            }
        }
        $this->$galleryName = $files;
        $this->mapper['list'] = $this->$galleryName;
        $this->mapper->save();
    }

    function sort() {
        $data = $_POST;
        if ($this->mapper->load(['@name = ?', $data['name']])) {
            $this->mapper['list'] = $data['list'];
        } else {
            $this->mapper->insert();
            $this->mapper['name'] = $data['name'];
            $this->mapper['list'] = $data['list'];
        }
        $this->mapper->save();
        return true;
    }

    function refresh() {
        $path = new Path();
        $this->mapper->load(['@name = ?', $_POST['name']]);
        $galleryPath = $path->gallery($_POST['name'] . '/vlb_images1');
        $imagesPath = $path->galleryFile($name . '/vlb_images1');

        foreach(scandir($galleryPath) as $file) {
            if ($file !== '.' && $file !== '..') {
                if (!in_array($file, $this->mapper['list'])) {
                    array_push($this->mapper['list'], $file);
                }
            }
        }
        $this->mapper->save();
        return true;
    }

    function deleteItem() {
        $gallery = $_POST['name'];
        $item = $_POST['item'];
        $this->mapper->load(['@name = ?', $gallery]);
        for ($i = 0; $i < count($this->mapper['list']); $i++) {
            if ($this->mapper['list'][$i] === $item) {
                array_splice($this->mapper['list'], $i, 1);
            }
        }
        $this->mapper->save();

        $path = new Path();
        $thumbPath = $path->gallery($gallery . '/vlb_thumbnails1');
        $imagePath = $path->gallery($gallery . '/vlb_images1');

        $thumbFile = $thumbPath . '/' . $item;
        $imageFile = $imagePath . '/' . $item;
        if (is_file($thumbFile)) {
            unlink($thumbFile);
        }
        if (is_file($imageFile)) {
            unlink($imageFile);
        }
        return true;
    }

}
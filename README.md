# easy3

## Routing i pozycjonowanie
* Ścieżki są ustawiane w pliku _config/routing.php
* Każda ścieżka tworzy nowy obiekt Page z wprowadzonych do niego danych. Do tych danych można się odwoływać później za pomocą _{{@page->NAZWA-DANEJ}}_

## Języki
* Języki ustawia się w pliku _config/config.ini_
* Włączenie i wyłączenie obsługi języków odbywa się w pliku _config/config.ini_
* W katalogu _view/translations_ znajdują się tłumaczenia treści nieedytowalnych (wyślij, projekt i realizacja, copyright, etc)

## Przestrzenie
* Istnieją przestrzenie lokalne i globalne. Jedne i drugie obsługują języki, tzn. zapisują i wczytują inne treści w zależności od wybranej wersji językowej
* Sekcja lokalna - {{@area->set('NAZWA')}}
* Sekcja globalna - {{@area->set('NAZWA', true)}}

## Galerie
* Każdy element galerii musi mieć atrybut [data-fancybox="nazwa"] lub klasę _lightbox_ aby otwierał się ładnie w lightboxie.
* Inicjalizacja galerii - _{{@gallery->create('NAZWA')}}_
* Elementy galerii można sortować i usuwać.
* Po dodaniu nowych zdjęć do katalogu ze zdjęciami, można kliknąć przycist _Refresh_ aby dograć brakujące pliki do galerii.

## Formularze
* Dane dotyczące formularzy znajdują się w katalogu _view/forms_
* Każdy formularz to osobny plik konfiguracyjny. Katalog języka jest pobierany automatycznie
* Do formularza można się odnieść poprzez kod {{@form->create('NAZWA-PLIKU-FORMULARZA')}}

## Mapa Google
* Wstawianie mapy odbywa się za pomocą `<gmap id="ID"></gmap>`
* Punkty na mapie wstawia się za pomocą `<gmarker></gmarker>`
* Mapa posiada atrybuty: _id, center, zoom_
* Punkty posiadają atrybuty: _coords, title, color_ oraz można do nich wrzucić kod html, który pojawi się jako infoWindow (po kliknięciu na ten marker)

## Edycja treści
* Ścieżka do edycji - _/asdf_
* Dane dostępowe - dev, dev12

### Przewijanie do góry strony
* Automatycznie włączony i dodany jest przycisk do przewinięcia strony na samą górę. Można mu zmieniać opcje - choć tylko prędkość i odległość, po której się pokaże.

### Parallax
* Za pomocą tagu `<parallax></parallax>` można dodać "parallax" (fixed background 😅).
* Tag przyjmuje dwa parametry - _img_ i opcjonalny _height_
* Wewnątrz parallaxa można dodać treść

### Accordion/Collapse
* Za pomocą tagu `<accordion></accordion>` można dodać rozwijane pole z tekstem.
* Tag przyjmuje jeden parametr _title_ odpowiadający za klikalny tytuł
* Wewnątrz tagu należy wprowadzić treść

### Masonry
* Za pomocą tagu `<masonry></masonry>` można dodać kontener Masonry. Kafelki dodaje się poprzez `<grid-item></grid-item>`.
* Kafelek przyjmuje parametry _width_ i _height_ odpowiadające za ich rozmiar. *UWAGA! Rozmiar podaje się jako mnożnik, nie konkretna długość!*
* Kafelek przyjmuje parametr _classname_ odpowiadające za dodatkowe klasy html dla niego.
* Wewnątrz kafelka należy wprowadzić treść

### Popup
* Mamy gotowy kod PopUpa do wykorzystania. Wystarczy go zaimportować kodem `<include href="{{@path->partial('popup')}}" />`
* Na końcu kodu popupa znajduje się kod przycisku, za pomocą którego można go wywołać. Trzeba pamiętać go wywalić stamtąd gdy używa się tegoż popupa 😉

### AOS
* AOS'a można włączyć w index.js

### Custom Scrollbar
* Aby włączyć Malihu Custom Scrollbar, należy odkomentować importy w _index.js_ i _libs.scss_
* Należy również zainicjować klasę CustomScrollbar w pliku _index.js_ (wystarczy odkomentować)
* Kolory i szerokość paska przewijania można zmienić w odpowiednim pliku scss

### Preloader
* Wyświetlanie preloadera jest uwarunkowane wartością w pliku _config.ini_
* Preloader posiada ODRĘBNE pliki *.css i *.js w katalogu _web/assets_

#### Opis plików konfiguracyjnych
* *src/index.js* - biblioteki jquery
* *src/scripts/vue.js* - komponenty vue
* *src/index.scss* - style bibliotek jquery, komponentów
* *www/config/config.ini* - główny plik konfiguracyjny - języki, nazwa strony, google maps, preloader
* *www/config/routing.php* - plik konfiguracji routingu
* Dodatkowo - każdy formularz ma swoją konfigurację dotyczącą tego z jakiego maila wychodzi i na jaki adres

#### Dostępne ścieżki
* {{@path->css('plik')}} - ścieżka do pliku CSS (katalog assets/css/)
* {{@path->js('plik')}} - ścieżka do pliku JS (katalog assets/js/)
* {{@path->img('plik')}} - ścieżka do pliku obrazka (katalog assets/img/)
* {{@path->file('plik')}} - ścieżka do innego pliku (katalog assets/files/)
* {{@path->partial('plik')}} - ścieżka do kawałka kodu html (katalog view/partials); *UWAGA! Bez rozszerzenia .html!*

#### Skrót dostępnych kodów i komponentów (jeśli konkretny komponent jest włączony)
* {{@area->set('NAZWA')}} - sekcja lokalna
* {{@area->set('NAZWA', true)}} - sekcja globalna
* {{@gallery->create('NAZWA')}} - galeria
* {{@form->create('NAZWA-PLIKU-FORMULARZA')}} - formularz
* `<tel></tel>` - klikalny numer telefonu
* `<email></email>` - klikalny adres e-mail
* `<gmap id="" center="" zoom=""></gmap>` - kontener mapy Google
* `<gmarker coords="" title="" color=""></gmarker>` - punkt na mapie Google
* `<parallax img="" height=""></parallax>` - parallax
* `<accordion></accordion>` - kontener bootstrapowego rozwijanego pola (należy odkomentować w vue.js/index.js)
* `<masonry></masonry>` - kontener siatki Masonry (należy odkomentować w vue.js/index.js/index.scss)
* `<grid-item width="2" height="2"></grid-item>` - kafelek siatki Masonry (należy odkomentować w vue.js/index.js/index.scss)
* `<include href="{{@path->partial('popup')}}" />` - kod popupa (można odkomentować w index.scss)

## Praca developera i Build produkcyjny - informacje
* Zmiany nie odświeżają automatycznie strony
* Build deweloperski nie robi minifikacji JS i CSS
* Build deweloperski nie robi PostCSS
* Build deweloperski nie usuwa z pliku CSS zbędnych klas
* Build produkcyjny usuwa zbędne klasy i zmniejsza pliki CSS i JS

## Praca developera i Build produkcyjny - komendy
* npm start watch / yarn watch - rozpoczęcie nasłuchiwania i zapisywania zmian
* npm start dev / yarn dev - pojedyńcza kompilacja deweloperska
* npm start build / yarn build - pojedyńcza kompilacja produkcyjna

## Wrzucenie strony na adres
* Na serwerze docelowym należy umieścić tylko katalog *www*
* Katalog *src* posiada tylko pliki potrzebne do budowy strony
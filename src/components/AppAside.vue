<template>
    <aside class="app__aside menu">
        <ul class="menu-list">
            <li><router-link to="/admin">Welcome</router-link></li>
        </ul>
        <!-- <p class="menu-label">
            Main
        </p>
        <ul class="menu-list">
            <li><router-link to="/admin/pages">Pages</router-link></li>
            <li><router-link to="/admin/users">Users</router-link></li>
            <li><router-link to="/admin/forms">Forms</router-link></li>
            <li><router-link to="/admin/settings">Settings</router-link></li>
        </ul> -->
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li><router-link to="/admin/pages">Pages</router-link>
                <ul>
                    <li><router-link to="/admin/pages">Manage</router-link></li>
                    <li><router-link to="/admin/pages/add">Add</router-link></li>
                    <li><router-link to="/admin/pages/settings">Settings</router-link></li>
                </ul>
            </li>
            <li><router-link to="/admin/users">Users</router-link>
                <ul>
                    <li><router-link to="/admin/users">Manage</router-link></li>
                    <li><router-link to="/admin/users/add">Add</router-link></li>
                    <li><router-link to="/admin/users/settings">Settings</router-link></li>
                </ul>
            </li>
            <li><router-link to="/admin/forms">Forms</router-link>
                <ul>
                    <li><router-link to="/admin/forms">Manage</router-link></li>
                    <li><router-link to="/admin/forms/add">Add</router-link></li>
                    <li><router-link to="/admin/forms/settings">Settings</router-link></li>
                </ul>
            </li>
            <li><router-link to="/admin/languages">Languages</router-link>
                <ul>
                    <li><router-link to="/admin/languages">Manage</router-link></li>
                    <li><router-link to="/admin/languages/add">Add</router-link></li>
                    <li><router-link to="/admin/languages/settings">Settings</router-link></li>
                </ul>
            </li>
            <li><router-link to="/admin/blocks">Blocks</router-link>
                <ul>
                    <li><router-link to="/admin/blocks">Manage</router-link></li>
                    <li><router-link to="/admin/blocks/add">Add</router-link></li>
                    <li><router-link to="/admin/blocks/settings">Settings</router-link></li>
                </ul>
            </li>
            <li><router-link to="/admin/themes">Themes</router-link>
                <ul>
                    <li><router-link to="/admin/themes">Manage</router-link></li>
                    <li><router-link to="/admin/themes/add">Add</router-link></li>
                    <li><router-link to="/admin/themes/settings">Settings</router-link></li>
                </ul>
            </li>
            <li><router-link to="/admin/settings">Settings</router-link>
                <ul>
                    <li><router-link to="/admin/settings/site">Site</router-link></li>
                    <li><router-link to="/admin/settings/seo">SEO</router-link></li>
                    <li><router-link to="/admin/settings/environment">Environment</router-link></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

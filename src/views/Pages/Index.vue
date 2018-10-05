<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Pages
            </p>
            <router-link to="/admin/pages/add" class="card-header-icon">
                <span class="icon">
                    <i class="fa fa-plus"></i>
                </span>
                Add
            </router-link>
        </header>
        <div class="card-content">
            <div class="menu">
                <ul class="menu-list">
                    <li v-for="li in list" :key="li._id">
                        <router-link :to="`/admin/pages/manage/${li._id}`">{{li.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            list: []
        }
    },
    computed: {
        base() {
            return this.$store.state.settings.base;
        }
    },
    methods: {
        getList() {
            this.$http.post(`${this.base}/admin/pages/list`).then(res => {
                this.list = res.body;
            }).catch(err => {
                console.error('Couldn\'t get list of pages');
            });
        }
    },
    mounted() {
        this.getList();
    }
}
</script>

<template>
    <form class="card" :action="`${base}/admin/pages/add`" method="POST" enctype="multipart/form-data" @submit.prevent="submit($event)">
        <div class="card-header">
            <p class="card-header-title">
                Pages - Add
            </p>
        </div>
        <div class="card-content">
            <div class="field" v-for="f in fields" :key="f.name">
                <label :for="f.name" class="label">{{f.title}}</label>
                <div class="control">
                    <input :type="f.type" class="input" :id="f.name" :name="f.name" :placeholder="f.placeholder">
                </div>
            </div>
            <div class="field">
                <button class="button is-info" type="submit">
                    Add
                </button>
                <button class="button is-danger" type="reset">
                    Reset
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    computed: {
        base() {
            return this.$store.state.settings.base;
        },
        fields() {
            return this.$store.state.pages.form.fields
        }
    },
    methods: {
        submit(e) {
            let data = {
                action: e.target.action,
                fields: new FormData(e.target)
            };
            this.$http.post(`${data.action}`, data.fields, {emulateJSON: true}).then(res => {
                this.$router.push({name: 'pages'});
            }).catch(err => {
                console.error(err);
            });
        }
    }
}
</script>

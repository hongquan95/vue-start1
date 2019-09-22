<template>
  <div class="text-center mt-3">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-4" dark v-on="on">Add New</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Project Title</v-card-title>

				<!-- Form input -->

        <v-form
					ref="form" class="px-3"
					v-model="valid"
					lazy-validation
				>
          <v-text-field
						v-model="name"
						label="Name"
						:rules="nameRules"
						:counter="10"
						required
						prepend-icon="mdi-pen"
						placeholder="Please input name"
					>
					</v-text-field>


          <v-text-field
						v-model="email"
						label="E-mail"
						required
						prepend-icon="mdi-email"
						:rules="emailRules"
					>
						</v-text-field>

        </v-form>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="error" dark @click="clear" >Clear</v-btn>
          <v-btn color="success" dark @click="submit" :loading="loading">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from '@/firebase'
export default {

	methods: {
		submit () {
			if (this.$refs.form.validate()) {
				this.loading = true;
				const person = {
					name: this.name,
					age: Math.round(Math.random()*100),
					status: "completed",
					created: new Date().toISOString().slice(0,10),
				}
				db.collection('persons').add(person).then(() => {
					this.loading = false;
					this.dialog = false;
					this.$emit('personAdded');
				})
			}
		},
		clear () {
			this.$refs.form.reset()
		},
	},
  data() {
    return {
			dialog: false,
			valid: true,
			name: '',
			loading: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
	}
};
</script>

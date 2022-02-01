<template>
<v-app> 
    <div class="title"> 
    <h1>Employee Form</h1>
    </div>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
       <v-row>
            <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="department"
            :rules="departmentRules"
            label="Department"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="12">
             <v-text-field
            type="number"
            v-model.number="salary"
            :rules="salaryRules"
            ref="input"
            min="0"
            label="Salary"
            requireds
          ></v-text-field> 
          </v-col>
      </v-row>
      <v-row>
          <v-col>
        <v-btn color="primary">
        Submit
        </v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-form></v-app>
</template>

<script>
export default {
    name: 'EmployeeForm',
     data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      department: '',
      departmentRules: [
          v => !!v || 'Department is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      salary: 0,
      salaryRules: [
          v => /^[0-9]+$/.test(v) || 'Not a number']
    })
}
</script>

<style scoped>
    .title {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

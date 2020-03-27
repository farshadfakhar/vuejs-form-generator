# From Generator;

## Usage

-  Install 
```bash
    npm i from-generator
  ```
- Import in app.js
```javascript
    import 'from-generator';
```

- Use it in your template file
```html
<form-creator
  ref="form"
  v-model="data"
  :schema="schema"
  :on-submit="onSubmit"
  validations-container-class="row"
  validation-container-class="col-lg-2"
  input-container-class="form-group"
  input-class="form-control"
/>
```

- Define your form schema
```javascript
    data() {
    schema: [
        {
          type: "textarea",
          name: "name",
          label: "Name",
          classes: { "form-control": true },
          rules: "digits:11|required",
          key: "name"
        },
        {
          type: "text",
          name: "phone",
          label: "Cell Phone",
          classes: { "form-control": true },
          rules: "required",
          key: "tel"
        },
        {
          type: "date",
          name: "birthday",
          label: "Birth Day",
          classes: {},
          rules: "required",
          key: "birthday"
        },
        {
          type: "checkbox",
          name: "sure",
          label: "Sure?",
          classes: {},
          rules: "required",
          key: "sure"
        },
        {
          type: "checkbox",
          name: "sure",
          label: "Sure?",
          classes: {},
          rules: "required",
          key: "sure"
        },
        {
          type: "multiselect",
          name: "likes",
          label: "Sports",
          classes: {},
          rules: "required",
          key: "likes",
          dataSource: [
            {id: 1, name: 'foot'},
            {id: 2, name: 'bal'},
            {id: 3, name: 'basklet'},
          ],
          dataTextField: 'name',
          dataValueField: 'id'
        },
        {
          type: "select",
          name: "sex",
          label: "Sex",
          classes: {},
          rules: "required",
          key: "sex",
          dataSource: [
            {id: 1, name: 'male'},
            {id: 2, name: 'female'},
          ],
          dataTextField: 'name',
          dataValueField: 'id'
        }
      ]
    }
```

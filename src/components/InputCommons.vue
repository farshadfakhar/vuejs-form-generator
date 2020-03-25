<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      default: Date.now()
    },
    type: {
      type: String,
      default: "text"
    },
    classes: {
      type: Object
    },
    placeHolder: {
      type: String
    },
    rules: {
      type: String
    },
    name: {
      type: String
    },
    inputContainerClass: {
      type: String
    },
    inputClass: {
      type: String
    },
    dataSource: {
      type: Array
    },
    dataTextField: {
      type: String
    },
    dataValueField: {
      type: String
    },
    value: {}
  },
  watch: {
    value: {
      handler(val) {
        this.content = val;
      },
      deep: true
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    }
  }
};
</script>

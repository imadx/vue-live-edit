# Vue Live Edit
### Text Editing in place, the easy way

## Installation
### 1. Install using npm  

```bash
npm install --save vue-live-edit
```
### 2. Import *Vue* and *vue-live-edit*

```javascript
import Vue from 'vue'  
import LiveEdit from 'vue-live-edit'  
Vue.use(LiveEdit);
```

### 3. Include components with your app  

Within your Vue app, use, `<live-edit></live-edit>` as a `Vue.component`, with the following options.

```html
<live-edit
    v-model="value"
    :editable="isEditable"
    placeholder="placeholder on edit"
    multiline="true"
    >
</live-edit>
```

The `value`, and `isEditable` props can be reactive.


<template>
    <div class="stage">
        <MultiSync v-bind.sync="{ a, b, c }"/>
        <div class="preview" style="background: lightgray">
            Preview:
            <p v-for="(value, key) in {a,b,c}">{{key}}: {{value}}</p>
        </div>
    </div>
</template>

<script>
import MultiSync from "./multi-sync.js";

export default {
    components: { MultiSync },
    data() {
        return {
            a: "val-a",
            b: "val-b",
            c: "val-c"
        };
    }
};
</script>


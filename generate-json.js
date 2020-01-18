const { join } = require("path");
const [_1, _2, keyboard, keymap] = process.argv;
const keyboardPath = join(__dirname, "keyboards", keyboard);
const keymapPath = join(keyboardPath, "keymaps", keymap);

const info = require(join(keyboardPath, "info.json"));
const layout = Object.keys(info.layouts)[0];

const layers = require(join(keymapPath, "layers.json"));
const json = {
    keyboard,
    layout,
    keymap,
    layers
};

require("fs").writeFileSync(
    join(keymapPath, "keymap.json"),
    JSON.stringify(json, null, 2)
);
console.log("Generated keymap", join(keymapPath, "keymap.json"));

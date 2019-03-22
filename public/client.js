// client-side js
// run by the browser each time your view template is loaded
console.log(`hi from 'client.js'`);

function append_item(str, out_elm){
    const new_li         = document.createElement('li');
    new_li.innerHTML     = str;
    out_elm.appendChild(new_li);}

function append_item_list(item_list, out_id){
    const out_elm        = document.getElementById(out_id);
    item_list.forEach(s=>append_item(s, out_elm))}

function make_input_handler(form_id, input_id, out_id){
    // Returns a closure that serves as a handler.
    // closure logic is not strickly needed for simple demo but
    // allow for extension to create multiple/different input/out "instances"
    const clear_input_field = (input_field)=>{
        input_field.value = '';
        input_field.focus();}
    return (event)=>{ // listen for the form to be submitted and add a new dream when it is
          event.preventDefault();
          const input_form   = document.getElementById(form_id);
          const input_field  = input_form.elements[input_id];
          const out_elm      = document.getElementById(out_id)
          append_item(input_field.value, out_elm);
          clear_input_field(input_field)}}

function install_input_handler(form_id, input_id, output_id){
    const form      = document.getElementById(form_id);
    form.onsubmit   = make_input_handler(form_id, input_id, output_id)}

// ===========================================
install_input_handler('input-form', 'dream', 'dreams')
append_item_list(['initial-1', 'initial-2',], 'dreams')  // install initial list

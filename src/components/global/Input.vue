<template>
  <input></input>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

/* ----------------------------------------------------------------------------------------------------
Super Form Reset
A couple of things to watch out for:
- IE8: If a text input doesn't have padding on all sides or none the text won't be centered.
- The default border sizes on text inputs in all UAs seem to be slightly different. You're better off using custom borders.
- You NEED to set the font-size and family on all form elements
- Search inputs need to have their appearance reset and the box-sizing set to content-box to match other UAs
- You can style the upload button in webkit using ::-webkit-file-upload-button
- ::-webkit-file-upload-button selectors can't be used in the same selector as normal ones. FF and IE freak out.
- IE: You don't need to fake inline-block with labels and form controls in IE. They function as inline-block.
- By turning off ::-webkit-search-decoration, it removes the extra whitespace on the left on search inputs
----------------------------------------------------------------------------------------------------*/

input,
label,
select,
button,
textarea
{
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	background:none;
	line-height:inherit;
	font-size:inherit;
	font-family:inherit;
}

input:focus
{
	outline:0;
}

/* Box Sizing Reset
-----------------------------------------------*/

/* All of our custom controls should be what we expect them to be */
input,
textarea
{
	-webkit-box-sizing:content-box;
	-moz-box-sizing:content-box;
	box-sizing:content-box;
}

/* These elements are usually rendered a certain way by the browser */
button,
input[type=reset],
input[type=button],
input[type=submit],
input[type=checkbox],
input[type=radio],
select
{
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
}

/* Text Inputs
-----------------------------------------------*/

input[type=date],
input[type=datetime],
input[type=datetime-local],
input[type=email],
input[type=month],
input[type=number],
input[type=password],
input[type=range],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url],
input[type=week]
{
}



/* File Uploads
-----------------------------------------------*/

input[type=file]
{

}

input[type=search]
{
	-webkit-appearance:textfield;
	-webkit-box-sizing:content-box;
}

/* Turn off the recent search for webkit. It adds about 15px padding on the left */
::-webkit-search-decoration
{
	display:none;
}

/* Buttons
-----------------------------------------------*/

input[type="reset"],
input[type="button"],
input[type="submit"]
{
	/* Fix IE7 display bug */
	overflow:visible;
	width:auto;
}


input {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all .3s;

  &:hover {
    border-color: $color-primary-5;
  }

  &:focus {
    outline: 0;
    border-color: $color-primary-5;
    box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  }
}

</style>

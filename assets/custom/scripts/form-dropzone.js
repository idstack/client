var FormDropzone = function () {


    return {
        //main function to initiate the module
        init: function () {

            Dropzone.options.myDropzone = {
                dictDefaultMessage: "",
                autoProcessQueue: true,
                uploadMultiple: true,
                parallelUploads: 100,
                maxFiles: 3,
                init: function() {
                    this.on("addedfile", function(file) {
                        // Create the remove button
                        var removeButton = Dropzone.createElement("<a href='javascript:;'' class='btn red btn-sm btn-block'>Remove</a>");

                        // Capture the Dropzone instance as closure.
                        var _this = this;

                        // Listen to the click event
                        removeButton.addEventListener("click", function(e) {
                            // Make sure the button click doesn't submit the form:
                            e.preventDefault();
                            e.stopPropagation();

                            // Remove the file preview.
                            _this.removeFile(file);
                            // If you want to the delete the file on the server as well,
                            // you can do the AJAX request here.
                        });

                        var submit_button = document.querySelector("#submitRP");
                        submit_button.addEventListener("click", function () {
                            alert("Number of files Added : "+ _this.files.length);
                            //implement the api request for the relying party here
                        })

                        // Add the button to the file preview element.
                        file.previewElement.appendChild(removeButton);
                        this.previewElement.appendChild(submit_button);
                    });
                    this.on()
                }
            }
        }
    };
}();

jQuery(document).ready(function() {
    FormDropzone.init();
});
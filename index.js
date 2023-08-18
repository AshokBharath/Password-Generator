let temporary_string = "", temporary_string1 = "", temporary_string2 = "", temporary_string3 = "", result_string = "";
let alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let special_characters_array = ["!", "@", "#", "$", "&", "*", "_"];

function create() {
    let input = document.getElementById("input_range").value;
    if ((input >= 8) && (input <= 20)) {
        if (document.getElementById("special_character").checked && document.getElementById("numbers").checked && document.getElementById("capitalize_first").checked) {
            let alphabet_limit = Math.ceil(input / 2);
            let number_limit = (Math.ceil(input - alphabet_limit) / 2) + alphabet_limit;

            for (let i = 0; i < alphabet_limit; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            for (let i = alphabet_limit + 1; i < number_limit; i++) {
                let n2 = Math.floor(Math.random() * number_array.length);
                temporary_string2 = temporary_string2 + number_array[n2];
            }
            for (let i = number_limit; i < input; i++) {
                let n3 = Math.floor(Math.random() * special_characters_array.length);
                temporary_string3 = temporary_string3 + special_characters_array[n3];

            }
            temporary_string = temporary_string1 + temporary_string2 + temporary_string3;
            result_string = (temporary_string.charAt(0)).toUpperCase() + temporary_string.slice(1);



            document.getElementById("display").innerHTML = result_string;
            temporary_string = "";
            temporary_string1 = "";
            temporary_string2 = "";
            temporary_string3 = "";




        }
        else if (document.getElementById("special_character").checked && document.getElementById("numbers").checked) {
            let alphabet_limit = Math.ceil(input / 2);
            let number_limit = (Math.ceil(input - alphabet_limit) / 2) + alphabet_limit;

            for (let i = 0; i < alphabet_limit; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            for (let i = alphabet_limit + 1; i < number_limit; i++) {
                let n2 = Math.floor(Math.random() * number_array.length);
                temporary_string2 = temporary_string2 + number_array[n2];
            }
            for (let i = number_limit; i < input; i++) {
                let n3 = Math.floor(Math.random() * special_characters_array.length);
                temporary_string3 = temporary_string3 + special_characters_array[n3];

            }
            result_string = temporary_string1 + temporary_string2 + temporary_string3;
            document.getElementById("display").innerHTML = result_string;
            result_string = "";
            temporary_string1 = "";
            temporary_string2 = "";
            temporary_string3 = "";


        }
        else if (document.getElementById("special_character").checked && document.getElementById("capitalize_first").checked) {
            let i1 = Math.ceil(input / 2);
            let i2 = Math.ceil((input - i1) / 2);
            for (let i = 0; i < input - i2; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            for (let i = input - i2; i < input; i++) {
                let n2 = Math.floor(Math.random() * special_characters_array.length);
                temporary_string2 = temporary_string2 + special_characters_array[n2];
            }
            temporary_string = temporary_string1 + temporary_string2;
            result_string = (temporary_string.charAt(0)).toUpperCase() + temporary_string.slice(1);

            document.getElementById("display").innerHTML = result_string;
            result_string = "";
            temporary_string = "";
            temporary_string1 = "";
            temporary_string2 = "";
        }
        else if (document.getElementById("numbers").checked && document.getElementById("capitalize_first").checked) {
            let i1 = Math.ceil(input / 2);
            let i2 = Math.ceil((input - i1) / 2);
            for (let i = 0; i < input - i2; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            for (let i = input - i2; i < input; i++) {
                let n2 = Math.floor(Math.random() * number_array.length);
                temporary_string2 = temporary_string2 + number_array[n2];
            }
            temporary_string = temporary_string1 + temporary_string2;
            result_string = (temporary_string.charAt(0)).toUpperCase() + temporary_string.slice(1);

            document.getElementById("display").innerHTML = result_string;
            temporary_string = "";
            temporary_string1 = "";
            temporary_string2 = "";


        }
        else if (document.getElementById("special_character").checked) {
            let i1 = Math.ceil(input / 2);
            let i2 = Math.ceil((input - i1) / 2);
            for (let i = 0; i < input - i2; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            for (let i = input - i2; i < input; i++) {
                let n2 = Math.floor(Math.random() * special_characters_array.length);
                temporary_string2 = temporary_string2 + special_characters_array[n2];
            }
            result_string = temporary_string1 + temporary_string2;

            document.getElementById("display").innerHTML = result_string;
            temporary_string = "";
            temporary_string1 = "";
            temporary_string2 = "";

        }
        else if (document.getElementById("numbers").checked) {
            let i1 = Math.ceil(input / 2);
            let i2 = Math.ceil((input - i1) / 2);
            for (let i = 0; i < input - i2; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            for (let i = input - i2; i < input; i++) {
                let n2 = Math.floor(Math.random() * number_array.length);
                temporary_string2 = temporary_string2 + number_array[n2];
            }
            result_string = temporary_string1 + temporary_string2;

            document.getElementById("display").innerHTML = result_string;
            result_string = "";
            temporary_string1 = "";
            temporary_string2 = "";


        }
        else if (document.getElementById("capitalize_first").checked) {
            for (let i = 0; i < input; i++) {

                let n1 = Math.floor(Math.random() * alphabet_array.length);
                temporary_string1 = temporary_string1 + alphabet_array[n1];
            }
            result_string = (temporary_string1.charAt(0)).toUpperCase() + temporary_string1.slice(1);
            document.getElementById("display").innerHTML = result_string;
            result_string = "";
            temporary_string1 = "";


        }



    }
    else {
        document.getElementById("display").innerHTML = "enter value between 8-20";

    }

}

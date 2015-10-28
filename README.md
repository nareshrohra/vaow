**About the project**
-----------------
Translate value to word. Example ***1,000,000*** is translated to ***1 million***

----------
**How to install?**
---------------
Very easy! Just run these commands after cloning the repository

> 1. npm install
> 2. jspm install
> 3. gulp watch

----------
**How to use it in my project?**
---------------
Even easier! After downloading the zip and extracting. Take the **dist/vaow.js** file and copy it in your project.

----------
# Sample code

## Translating a number

    var translator = new vaow.NumberTranslator();
    var number = Math.pow(10, 6);
    translator.translate(number); //will return 1 million

## Translating time

    var translator = new vaow.TimeTranslator();
    var seconds = 120;
    translator.translate(seconds); //will return 2 minutes

----------
# License
vaow is freely distributable under the terms of the MIT license

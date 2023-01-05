    var arrsalaries = new Array();
    var arrNames = new Array();
    var arrAges = new Array();
    var arrexperience = new Array();

    function displayData() {

        var name = document.getElementById('name').value;
        var salary = document.getElementById('salary').value;
        var age = document.getElementById('age').value;
        var experience = document.getElementById('experience').value;

        arrsalaries[arrsalaries.length] = salary;
        arrNames[arrNames.length] = name;
        arrAges[arrAges.length] = age;
        arrexperience[arrexperience.length] = experience;


        var content = "<b>Data Entered by User :</b><br>";
        content += [...arrNames] + "</br>";
        content += [...arrAges] + "</br>";
        content += [...arrsalaries] + "</br>";
        content += [...arrexperience] + "</br>";
        document.getElementById('display').innerHTML = content;

        function bubbleSort(arr) {
            let swapped
            do {
                swapped = false
                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] > arr[i + 1]) {
                        let temp = arr[i]
                        arr[i] = arr[i + 1]
                        arr[i + 1] = temp
                        swapped = true
                    }

                }
            } while (swapped)

        }



        bubbleSort(arrNames)
        bubbleSort(arrAges)
        bubbleSort(arrsalaries)
        bubbleSort(arrexperience)

        console.log(arrNames, arrAges, arrsalaries, arrexperience)

        var bubbleSort = "<b>Sorting Data By BUBBLESORT :</b><br>";
        bubbleSort += [...arrNames] + "</br>";
        bubbleSort += [...arrAges] + "</br>";
        bubbleSort += [...arrsalaries] + "</br>";
        bubbleSort += [...arrexperience] + "</br>";



        var SortName = document.getElementById('SortName');
        SortName.addEventListener('click', function (e) {
            document.getElementById('SortName').innerHTML = arrNames;
            document.getElementById('SortName').innerHTML = bubbleSort;
        })
        var SortAge = document.getElementById('SortAge');
        SortAge.addEventListener('click', function (e) {
            document.getElementById('SortAge').innerHTML = arrAges;
            document.getElementById('SortAge').innerHTML = bubbleSort;

        })

        var SortSalary = document.getElementById('SortSalary');
        SortSalary.addEventListener('click', function (e) {
            document.getElementById('SortSalary').innerHTML = arrsalaries;
            document.getElementById('SortSalary').innerHTML = bubbleSort;

        })

        var SortExperience = document.getElementById('SortExperience');
        SortExperience.addEventListener('click', function (e) {
            document.getElementById('SortExperience').innerHTML = arrexperience;
            document.getElementById('SortExperience').innerHTML = bubbleSort;

        })


    }

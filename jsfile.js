    function compareNumbers() {
        let a = document.getElementById('inputA').value;
        let b = document.getElementById('inputB').value;

        a = Number(a);
        b = Number(b);

        if (a > b) {
            document.getElementById('result').innerText = "A가 B보다 큼";
        } else if (a < b) {
            document.getElementById('result').innerText = "A가 B보다 작음";
        } else {
            document.getElementById('result').innerText = "A가 B가 같음";
        }
    }
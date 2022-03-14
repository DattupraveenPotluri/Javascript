var a = 6;
        function test() {
            var a = 7;
            function again() {
                var a = 8;
                alert(a);  // First
            }
            again();
            alert(a);  // Second
        }
        test();
        ​alert(a);​  // Third
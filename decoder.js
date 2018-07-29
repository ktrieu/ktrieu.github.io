bytes = ['B3', '2B', '00', '3A', '35', 'BA', 'DD', '66', '57', '7C', '24', 'C1', '4F', 'C9', '19', '06', '43', '46', 'D1', '31', 'A7', 'C5', '4B', 'B8', '2F', 'FE', '03', 'E0', '22', '61', '57', '77', '24', '79', '23', 'DC', '21', 'F6', '2C', 'D4', '18', '2E', '91', 'C3', 'B2', '67', 'B5', '45', 'AB', 'CA', 'ED', 'AF', '02', '61', '51', '0D', '4E', 'EA', '1E', '87', 'CD', '33', 'C7', 'C7', '71', '31', '30', '9C', 'C4', '28', '0E', 'B4', '24', '3D', '11', '54', 'F0', '44', 'F9', 'CF', '62', '96', 'D9', 'BF', 'F7', '39', '7E', '43', '90', '98', '7F', 'E6', '32', '03', 'DA', '0D', 'E4', '02', '78', 'B3', 'A5', '4F', '5D', 'DC', '69', '75', 'FA', '04', 'F7', '49', '84', '9E', '1A', '62', '59', '5A', '9F', '63', '0B', '07', '95', '91', '3D', 'E0', '15', '3E', '3A', 'AC', '38', '8C', '45', 'FB', '9D', '85', '0C', 'FE', '91', '35', '41', 'D6', 'C0', '83', '98', 'F2', 'C8', '83', '32', 'A8', '2F', 'DF', '00', '28', '1D', '62', 'FC', 'DC', '4F', 'E7', 'E4', '6A', 'E9', '0C', '51', 'C5', 'C8', '06', 'B4', '11', '64', 'E3', '3A', 'B9', '2C', '96', '86', '2E', '06', '8B', '0C', '16', 'C0', '99', '90', 'B8', '38', '1A', '00', 'DA', '79', '15', 'B6', '7F', 'E4', 'A2', '0F', '59', '9B', '0F', '1B', '6D', '48', '19', '13', 'C7', 'B9', '53', '8C', 'EE', '63', '91', '44', 'F4', '15', '61', 'BA', '92', 'E4', 'FE', '75', '1D', '1E', '24', '2C', 'D8', '8F', '51', 'D6', '95', '51', '98', '87', '13', '6A', '7C', '15', 'AA', 'BD', '7B', '40', '04', '49', '22', '01', '41', '30', 'A9', '1F', '17', '0F', '66', 'CC', 'B3', 'C1', '39', '46', '3A', '7E', '90', '9A', '37', 'AA', '86', '3F', 'B2', '78', '05', 'FC', '97', '31', 'C0', '9C', '8C', '79', '06', '7E', '79', '93', '0A', '40', '65', '46', 'B2', '4C', '9A', '62', '9B', '26', 'C2', 'CE', '2A', '4B', 'E4', '8F', '58', '9A', '37', '5F', 'EB', '73', '1F', 'C4', 'AB', '22', '5C', '11', '84', '8C', 'F8', '9E', '29', '1F', 'B2', '71', '33', '97', '0C', '06', '36', '18', '47', '4A', '89', '28', '01', 'ED', 'D6', '8F', '54', '69', '8C', '5E', '5B', '50', '67', '46', 'F6', '76', '5A', '6F', '7F', '12', '25', 'DE', 'A4', 'DA', '11', '40', 'FE', 'B6', '0F', '65', '07', '45', '24', '1C', '69', '36', '95', '88', '3D', 'CB', '21', 'E6', 'FB', 'FE', 'FB', 'B8', '5A', '29', '91', '94', '80', '36', 'A5', '2B', '5D']

TABLE_WIDTH = 20
TABLE_HEIGHT = 19

CELL_MAPPING = {};

var onChangeListener = function(e) {
    var orig = e.target.getAttribute('data-orig-value');
    for (var i = 0; i < CELL_MAPPING[orig].length; i++) {
        CELL_MAPPING[orig][i].value = e.target.value;
    }
}

window.onload = function() {

    var table = document.getElementById("code_table")

    for (y = 0; y < TABLE_HEIGHT; y++) {
        var row = table.insertRow(y);
        for (x = 0; x < TABLE_WIDTH; x++) {
            var cell = row.insertCell(x);
            var input = document.createElement('INPUT');
            input.setAttribute('size', '2');
            cell.appendChild(input);
            var idx = (y * TABLE_WIDTH) + x;
            if (idx <= 376) {
                var value = bytes[idx];

            } else {
                var value = idx;
            }
            input.value = value;
            input.setAttribute('data-orig-value', value);
            input.oninput = onChangeListener;
            if (!(value in CELL_MAPPING)) {
                CELL_MAPPING[value] = [];
            }
            CELL_MAPPING[value].push(input);
        }
    }

}

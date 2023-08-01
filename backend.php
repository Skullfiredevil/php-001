<?php
$database = [
  'bases' => [
    'thin',
    'deep dish',
    'stuffed crust'
  ],
  'sauces' => [
    'tomato',
    'bbq',
    'chocolate'
  ],
  'flavours' => [
    'cheese',
    'peperoni',
    'ham & pineapple',
    'chicken & bacon',
    'chocolate & candy'
  ],
  'extras' => [
    'chili oil',
    'double up',
    'olives',
    'dipping oil'
  ]
];

// Get the selected option from the query parameters
$selectedOption = $_GET['option'] ?? '';

// Check if the selected option exists in the $database array
if (array_key_exists($selectedOption, $database)) {
  // Return the corresponding data as JSON
  header('Content-Type: application/json');
  echo json_encode($database[$selectedOption]);
} else {
  // Return an empty array if the selected option is not found
  header('Content-Type: application/json');
  echo json_encode([]);
}
?>

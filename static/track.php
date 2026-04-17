<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$file = 'data.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $input = json_decode(file_get_contents('php://input'), true);
    $url = $input['url'];
    $data[$url] = ($data[$url] ?? 0) + 1;
    file_put_contents($file, json_encode($data));
    echo json_encode(['success' => true]);
} else {
    $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $sorted = [];
    arsort($data);
    $sorted = array_slice($data, 0, 20, true);
    echo json_encode(array_keys($sorted));
}
?>

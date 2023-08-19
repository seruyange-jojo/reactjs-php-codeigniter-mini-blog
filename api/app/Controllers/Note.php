<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

use App\Models\NoteModel;

class Note extends ResourceController
{
    use ResponseTrait;

    public function index()
    {

        header("Access-Control-Allow-Origin : *");
        header("Access-Control-Allow-Headers : Content-Type");
        header("Access-Control-Allow-Methods : GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Credentials : true");

        $model = new NoteModel();
        $data = $model->orderBy('id', 'desc')->findAll();
        json_encode($data);
        return $this->respond($data);
    }

    public function show($id = null)
    {
        $model = new NoteModel();
        $data = $model->where('id', $id)->find($id);
        json_encode($data);
        return $this->respond($data);
    }

    public function create()
    {
        $model = new NoteModel();
        $data = [
            'title' => $this->request->getVar('title'),
            'author' => $this->request->getVar('author'),
            'body' => $this->request->getVar('body')
        ];

        $model->save($data);

        $response = [
            'error' => null,
            'status' => 200,
            'messages' => [
                'Created New Note successfully'
            ]
        ];

        return $this->respondCreated($response);
    }

    public function update($id = null)
    {
        $model = new NoteModel();
        $data = [
            'title' => $this->request->getVar('title'),
            'author' => $this->request->getVar('author'),
            'body' => $this->request->getVar('body')
        ];
        $model->update($id, $data);
        $response = [
            'error' => null,
            'status' => 200,
            'messages' => [
                'Note ' . $id . ' updated successfully. '
            ]
        ];
    }

    public function delete($id = null)
    {
        $model = new NoteModel();
        $model->where('id', $id)->delete($id);

        $response = [
            'error' => null,
            'status' => 200,
            'messages' => [
                'Note ' . $id . ' Deleted Successfully'
            ]
        ];

        return $this->respondDeleted($response);
    }
}

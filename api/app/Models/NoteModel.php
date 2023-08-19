<?php
namespace App\Models;

use CodeIgniter\Model;

class NoteModel extends Model{
    protected $table = 'Notes';
    protected $primaryKey = 'id';
    protected $allowedFields = ['author', 'title', 'body'];
}
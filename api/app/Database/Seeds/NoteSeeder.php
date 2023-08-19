<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class NoteSeeder extends Seeder
{
    public function run()
    {
        //
        $data = [
                        
        ];


        $this->db->table('notes')->insertBatch($data);
    }
}

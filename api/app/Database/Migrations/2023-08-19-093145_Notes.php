<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class Notes extends Migration
{
    public function up()
    {
        //
        $this->forge->addField([
            'id' =>[
                'type' => 'int',
                'constraint' => 5,
                'auto-increment' => true
            ],
            'author' =>[
                'type' => 'varchar',
                'constraint' => 30,
                'default' => 'Seruyange'
            ],
            'title' =>[
                'type' => 'varchar',
                'constraint' => 100
            ],
            'body' =>[
                'type' => 'TEXT'
            ],
            'created_at' => [
                'type' => 'timestamp',
                'default' => new RawSql('CURRENT_TIMESTAMP')
            ]
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('Notes');
    }

    public function down()
    {
        //
        $this->forge->dropTable('Notes');
    }
}

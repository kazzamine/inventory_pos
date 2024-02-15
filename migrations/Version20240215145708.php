<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240215145708 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE storage (id INT AUTO_INCREMENT NOT NULL, storage_quantity INT DEFAULT NULL, prod_id_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_547A1B34F91A0F34 (prod_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE storage ADD CONSTRAINT FK_547A1B34F91A0F34 FOREIGN KEY (prod_id_id) REFERENCES product (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE storage DROP FOREIGN KEY FK_547A1B34F91A0F34');
        $this->addSql('DROP TABLE storage');
    }
}

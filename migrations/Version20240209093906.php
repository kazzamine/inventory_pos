<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240209093906 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE model (id INT AUTO_INCREMENT NOT NULL, mod_name VARCHAR(100) NOT NULL, icon VARCHAR(200) NOT NULL, path VARCHAR(200) NOT NULL, role VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE sub_model (id INT AUTO_INCREMENT NOT NULL, submod_name VARCHAR(200) NOT NULL, icon VARCHAR(200) NOT NULL, path VARCHAR(200) NOT NULL, model_id_id INT DEFAULT NULL, INDEX IDX_3BD116604107BEA0 (model_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE sub_model ADD CONSTRAINT FK_3BD116604107BEA0 FOREIGN KEY (model_id_id) REFERENCES model (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sub_model DROP FOREIGN KEY FK_3BD116604107BEA0');
        $this->addSql('DROP TABLE model');
        $this->addSql('DROP TABLE sub_model');
    }
}

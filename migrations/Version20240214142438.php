<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240214142438 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product ADD picture LONGBLOB DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD email VARCHAR(255) NOT NULL, ADD picture LONGBLOB DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE storage (id INT AUTO_INCREMENT NOT NULL, quantity INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE product ADD storage_id_id INT DEFAULT NULL, DROP picture');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD12905777 FOREIGN KEY (storage_id_id) REFERENCES storage (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_D34A04AD12905777 ON product (storage_id_id)');
        $this->addSql('ALTER TABLE user DROP email, DROP picture');
    }
}

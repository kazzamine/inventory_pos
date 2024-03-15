<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240208152654 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C19D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_64C19C19D86650F ON category (user_id_id)');
        $this->addSql('ALTER TABLE product ADD tax DOUBLE PRECISION DEFAULT NULL, ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD9D86650F ON product (user_id_id)');
        $this->addSql('ALTER TABLE user ADD phone INT NOT NULL, ADD adress VARCHAR(200) NOT NULL, ADD city VARCHAR(100) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP phone, DROP adress, DROP city');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD9D86650F');
        $this->addSql('DROP INDEX IDX_D34A04AD9D86650F ON product');
        $this->addSql('ALTER TABLE product DROP tax, DROP user_id_id');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C19D86650F');
        $this->addSql('DROP INDEX IDX_64C19C19D86650F ON category');
        $this->addSql('ALTER TABLE category DROP user_id_id');
    }
}

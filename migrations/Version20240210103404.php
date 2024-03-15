<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240210103404 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE model (id INT AUTO_INCREMENT NOT NULL, mod_name VARCHAR(100) NOT NULL, icon VARCHAR(200) NOT NULL, path VARCHAR(200) NOT NULL, role VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, quantity INT NOT NULL, discount DOUBLE PRECISION DEFAULT NULL, order_date DATE NOT NULL, prod_id_id INT DEFAULT NULL, order_detail_id INT DEFAULT NULL, payment_id_id INT DEFAULT NULL, INDEX IDX_F5299398F91A0F34 (prod_id_id), INDEX IDX_F529939864577843 (order_detail_id), UNIQUE INDEX UNIQ_F5299398280DA8E5 (payment_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE order_detail (id INT AUTO_INCREMENT NOT NULL, total DOUBLE PRECISION NOT NULL, user_id_id INT DEFAULT NULL, INDEX IDX_ED896F469D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE payement (id INT AUTO_INCREMENT NOT NULL, amount DOUBLE PRECISION DEFAULT NULL, rest DOUBLE PRECISION DEFAULT NULL, payment_provider_id INT DEFAULT NULL, INDEX IDX_B20A7885FCDF7870 (payment_provider_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE payment_method (id INT AUTO_INCREMENT NOT NULL, acc_number INT NOT NULL, expire_date DATE DEFAULT NULL, provider_id_id INT DEFAULT NULL, user_id_id INT DEFAULT NULL, INDEX IDX_7B61A1F626122B23 (provider_id_id), INDEX IDX_7B61A1F69D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE provider (id INT AUTO_INCREMENT NOT NULL, provider_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE sub_model (id INT AUTO_INCREMENT NOT NULL, submod_name VARCHAR(200) NOT NULL, icon VARCHAR(200) NOT NULL, path VARCHAR(200) NOT NULL, model_id_id INT DEFAULT NULL, INDEX IDX_3BD116604107BEA0 (model_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398F91A0F34 FOREIGN KEY (prod_id_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F529939864577843 FOREIGN KEY (order_detail_id) REFERENCES order_detail (id)');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398280DA8E5 FOREIGN KEY (payment_id_id) REFERENCES payement (id)');
        $this->addSql('ALTER TABLE order_detail ADD CONSTRAINT FK_ED896F469D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE payement ADD CONSTRAINT FK_B20A7885FCDF7870 FOREIGN KEY (payment_provider_id) REFERENCES provider (id)');
        $this->addSql('ALTER TABLE payment_method ADD CONSTRAINT FK_7B61A1F626122B23 FOREIGN KEY (provider_id_id) REFERENCES provider (id)');
        $this->addSql('ALTER TABLE payment_method ADD CONSTRAINT FK_7B61A1F69D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE sub_model ADD CONSTRAINT FK_3BD116604107BEA0 FOREIGN KEY (model_id_id) REFERENCES model (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398F91A0F34');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F529939864577843');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398280DA8E5');
        $this->addSql('ALTER TABLE order_detail DROP FOREIGN KEY FK_ED896F469D86650F');
        $this->addSql('ALTER TABLE payement DROP FOREIGN KEY FK_B20A7885FCDF7870');
        $this->addSql('ALTER TABLE payment_method DROP FOREIGN KEY FK_7B61A1F626122B23');
        $this->addSql('ALTER TABLE payment_method DROP FOREIGN KEY FK_7B61A1F69D86650F');
        $this->addSql('ALTER TABLE sub_model DROP FOREIGN KEY FK_3BD116604107BEA0');
        $this->addSql('DROP TABLE model');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE order_detail');
        $this->addSql('DROP TABLE payement');
        $this->addSql('DROP TABLE payment_method');
        $this->addSql('DROP TABLE provider');
        $this->addSql('DROP TABLE sub_model');
    }
}

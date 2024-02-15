<?php
namespace App\Form;
use Doctrine\DBAL\Types\FloatType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use function Sodium\add;

class UpdateProductForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('prodName',TextType::class,
            array('attr'=>array('class'=>'form-control')))
            ->add('prodDesc',TextType::class,
                array('attr'=>array('class'=>'form-control')))
            ->add('price',FloatType::class,
            array('attr'=>array('class'=>'form-control')))
            ->add('tax',FloatType::class,
            array('attr'=>array('class'=>'form-control')))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'=>'App\Entity\Product'
        ]);
    }
}
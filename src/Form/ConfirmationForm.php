<?php
namespace App\Form;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConfirmationForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options):void
    {
        $builder->add(
            'cancel', \Symfony\Component\Form\Extension\Core\Type\ButtonType::class,
                array('attr'=>array('class'=>'btn btn-primary'))
        )
        ->add(
            'confirm',SubmitType::class,
            array('attr'=>array('class'=>'btn btn-warning'))
        );
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'csrf_protection' => true,
        ]);
    }
}
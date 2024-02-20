<?php
namespace App\Form;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class newPasswordForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('password', TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('reset', SubmitType::class,
                array('attr'=>array('class'=>'offset-4 btn btn-primary btn-block gradient-custom-2 mb-3'))
            )
        ;
    }

}
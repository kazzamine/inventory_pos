<?php
namespace App\Form;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactusForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('subject', TextType::class,
                array('attr'=>array('class'=>'form-control','required'=>true))
            )->add('email', TextType::class,
                array('attr'=>array('class'=>'form-control','required'=>true))
            )->add('message', TextareaType::class,
                array('attr'=>array('class'=>'form-control','required'=>true))
            )
            ->add('send', SubmitType::class,
                array('attr'=>array('class'=>'btn btn-primary d-block w-100'))
            )
        ;
    }
}
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
                array('attr'=>array('class'=>'form-control'))
            )->add('email', TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )->add('message', TextareaType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('send', SubmitType::class,
                array('attr'=>array('class'=>'btn btn-primary d-block w-100'))
            )
        ;
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'csrf_protection' => true,
        ]);
    }

}
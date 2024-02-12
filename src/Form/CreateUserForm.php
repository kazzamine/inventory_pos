<?php
namespace App\Form;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class CreateUserForm extends AbstractType{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TextType::class,
            array('attr'=>array('class'=>'form-control'))
    )
            ->add('firstname', TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('lastname',TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('adress',TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('phone',TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('city',TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('password',PasswordType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('createuser', SubmitType::class,
                array('attr'=>array('class'=>'btn btn-primary d-block w-100'))
            )
        ;
    }
}
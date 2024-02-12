<?php

namespace App\Form;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
class AddProviderForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('providerName', TextType::class,
                array('attr'=>array('class'=>'form-control'))
            )
            ->add('addProvider', SubmitType::class,
                array('attr'=>array('class'=>'btn btn-primary d-block w-100'))
            )
        ;
    }
}
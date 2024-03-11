<?php
namespace App\Form;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CreateUserForm extends AbstractType{
    private $httpClient;
    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $cities = $this->fetchCityData($options['cities_api']);

        $builder
            ->add('picture', FileType::class, [
                'label' => 'profile Picture    ',
                'mapped' => false,
                'required' => false,
            ])
            ->add('username', TextType::class,
            array('attr'=>array('class'=>'form-control'),'required'=>true)
    )
            ->add('firstname', TextType::class,
                array('attr'=>array('class'=>'form-control'),'required'=>true)
            )
            ->add('lastname',TextType::class,
                array('attr'=>array('class'=>'form-control'),'required'=>true)
            )
            ->add('email',EmailType::class,
                array('attr'=>array('class'=>'form-control','placeholder'=>'email@email.com'),'required'=>true)

            )
            ->add('adress',TextType::class,
                array('attr'=>array('class'=>'form-control'),'required'=>true)
            )
            ->add('phone',TextType::class,
                array('attr'=>array('class'=>'form-control','placeholder'=>'+212(0)x123356'),'required'=>true,
                    'constraints'=>[
                    new Regex([
                        'pattern'=>'/^((\+212)?\(0\))?[0-9]+$/',
                        'message'=>'phone number must start with 212 or 0x'
                    ])]
                )
            )
            ->add('city',ChoiceType::class,
                array('choices'=>$cities,'attr'=>array('class'=>'form-control'))
            )
            ->add('roleId',ChoiceType::class,
                array('choices'=>array('ROLE_USER'=>'3','ROLE_ADMIN'=>'4'), 'attr'=>array('class'=>'form-control'))
            )->add('password',PasswordType::class,
                array('attr'=>array('class'=>'form-control'),'required'=>true)
            )
            ->add('createuser', SubmitType::class,
                array('attr'=>array('class'=>'btn btn-primary d-block w-100','data-bs-toggle'=>'modal', 'data-bs-target'=>'#orderload'))
            )
        ;
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'csrf_protection' => true,
            'cities_api' => 'https://countriesnow.space/api/v0.1/countries/cities',
        ]);
    }

    private function fetchCityData(string $apiEndpoint): array
    {
        $response = $this->httpClient->request('POST', $apiEndpoint,[
            'body'=>['country'=>'morocco']
        ]);
        $data = $response->toArray();
        $choices = [];
        foreach ($data['data'] as $city) {
            $choices[$city] = $city;
        }
        return $choices;
    }
}
<?php

namespace App\Twig\Extension;

use App\Service\ModelService;
use App\Twig\Runtime\ModelExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class ModelExtension extends AbstractExtension
{
    private $ModelService;
    public function __construct(ModelService $ModelService)
    {
        $this->ModelService=$ModelService;
    }

    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/3.x/advanced.html#automatic-escaping
            new TwigFilter('filter_name', [ModelExtensionRuntime::class, 'doSomething']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_model_items', [$this, 'getModelItems']),
        ];
    }
    public function getModelItems()
    {
        return $this->ModelService->getModelItems();
    }
}

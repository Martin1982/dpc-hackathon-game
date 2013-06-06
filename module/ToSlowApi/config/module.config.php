<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'toslow-api-controller' => 'ToSlowApi\Controller\ToSlowApiController',
		),
	),
	'router' => array(
		'routes' => array(
			'toslow-api' => array(
				'type' => 'segment',
				'options' => array(
					'route' => '/toslow-api[/:id]',
					'constraints' => array(
						'id' => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'toslow-api-controller',
					),
					
				),
			),
		),
	),
	'view_manager' => array(
		'template_path_stack' => array(
			'toslow-api' => __DIR__ . '/../view',
		),
		 'strategies' => array(
			'ViewJsonStrategy',
		),
	),
);
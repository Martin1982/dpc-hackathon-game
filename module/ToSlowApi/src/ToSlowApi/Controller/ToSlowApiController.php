<?php
namespace ToSlowApi\Controller;

use Zend\Mvc\Controller\AbstractRestfulController;

class ToSlowApiController extends AbstractRestfulController
{
	public function get($id)
	{
		
	}
	
	public function getList()
	{
		$data = array(
			'score1' => '1',
			'score2' => '2'
		);
		
		$jsonModel = new JsonModel();
        
        return $jsonModel;
	}
	
	public function create($data)
	{
		
	}
	
	public function update($id, $data){}
	
	public function delete($id){}
}
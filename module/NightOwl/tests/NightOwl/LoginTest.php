<?php

/*
 * This is designed to test login/auth functionality.
 */

namespace NightOwlTest;

use Zend\Test\PHPUnit\Controller\AbstractControllerTestCase;
use NightOwl\Model\Auth;

/**
 * Description of LoginTest
 *
 * @author Marc
 */
class LoginTest extends AbstractControllerTestCase
{
    public function setUp()
    {
        $this->setApplicationConfig(include '../../../config/application.config.php');
    }
    
    function testLogin()
    {
        $this->getRequest()->setMethod('GET');
        $this->dispatch('/login/login/McBuppy/test');
        $this->assertResponseStatusCode(200); 
    }
    


    function testInvalidLogin()
    {
        $this->getRequest()->setMethod('GET');
        $this->dispatch('/login/login/McBuppy/wrongpass');
        $this->assertResponseStatusCode(401); 
    }
    
    function testAuthValidate()
    {
        $this->getRequest()->setMethod('GET');
        $this->dispatch('/login/login/McBuppy/test');
        $json = json_decode($this->getResponse()->getBody());
        $auth = new Auth();
        $this->assertEquals($auth->auth($json->key), true);
    }
    function testInvalidAuthValidate()
    {
        $this->getRequest()->setMethod('GET');
        $this->dispatch('/login/login/McBuppy/test');
        $json = json_decode($this->getResponse()->getBody());
        $auth = new Auth();
        $this->assertEquals($auth->auth('fakekey'), false);
    }
    
    function testLogout()
    {
        $this->getRequest()->setMethod('GET');
        $this->dispatch('/login/login/McBuppy/test');
        $json = json_decode($this->getResponse()->getBody());
        
        $this->dispatch('/login/logout/' . $json->key);
        $this->assertEquals(json_decode($this->getResponse()->getBody())->status, true);
    }
    
}

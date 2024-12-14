<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function formIndex(){
        return view("createStudent");
    }
    public function formPost(Request $requested){

        Student::create([
            "name"=>$requested->stuName,
            "surname"=>$requested->stuSurname,
            "department"=>$requested->stuDepartment,
        ]);
        
        echo "Student registration has been successfully completed.";
        
    }
}

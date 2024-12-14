@extends('mainTemplate')
@section('otherContent')

<form action="{{ route('create_post') }}" method="POST">

@csrf
<label>Student Name:</label><br>
<input type="text" name="stuName"><br>
<label>Student Surname:</label><br>
<input type="text" name="stuSurname"><br>
<label>Student Department:</label><br>
<input type="text" name="stuDepartment"><br>
<input type="submit" name="send" value="Create"><br>

</form>

@endsection
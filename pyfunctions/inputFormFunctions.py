import runDBQuery as runQuery
# VALUES (\'"""+data['email']+"""\',\'"""+data['foodName']+"""\', \'"""+data['calories']+"""\', \'"""+data['servings']+"""\',\'"""+data['date']+"""\', \'"""+data['time']+"""\');"""
# VALUES ('user5','fooood','123','1','01-01-2020','snack');"""
def insertFood(data):
    print(data)
    query = """
    INSERT INTO food (email,food_name, Calories, servings, date_time, when_Eaten)
    VALUES (\'"""+data['email']+"""\',\'"""+data['foodName']+"""\', \'"""+data['calories']+"""\', \'"""+data['servings']+"""\',\'"""+data['date']+"""\', \'"""+data['time']+"""\');"""

    records = runQuery.updateDB(query)
    # print(records)
    # return records

def insertExercise(data):
    query = """
    INSERT INTO exercise (exercise_name, duration, date_time, email,caloriesburned)
    VALUES (\'"""+data['exerciseName']+"""\', \'"""+data['duration']+"""\', \'"""+data['date']+"""\', \'"""+data['email']+"""\', \'"""+data['caloriesburned']+"""\');"""

    records = runQuery.updateDB(query)
    print(records)
    return records

def insertAppointment(data):
    query = """
    INSERT INTO appointments (name_doctor, location_app, app_type, date_time, email)
    VALUES (\'"""+data['doctorsName']+"""\', \'"""+data['location']+"""\', \'"""+data['type']+"""\',\'"""+data['date_time']+"""\', \'"""+data['email']+"""\');"""

    records = runQuery.updateDB(query)
    print(records)
    return records

def getExerciseCalories():
    query = """select * from caloriesperexercise; """
    records = runQuery.queryDB(query)
    return records
from flask import Flask, render_template, request
import json
import datetime
from pyfunctions import loginFunction, appointmentsFunction,foodFunction,exerciseFunction,inputFormFunctions, dashboardPageFunctions
import configparser
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/getUserLogin", methods=['GET','POST'])
def getCurrentState():
    data = request.get_json()
    user_email = data['email']
    user_pass = data['password']
    loginTrue, is_admin = loginFunction.login(user_email, user_pass)
    return json.dumps({"login":loginTrue, "isAdmin":is_admin})

@app.route("/insertFood", methods=['GET','POST'])
def insertFood():
    data = request.get_json()
    print(data)
    print("---")
    raw_data = inputFormFunctions.insertFood(data)
    return json.dumps(raw_data)

@app.route("/insertExercise", methods=['GET','POST'])
def insertExercise():
    data = request.get_json()
    raw_data = inputFormFunctions.insertExercise(data)
    return json.dumps(raw_data)

@app.route("/insertAppointment", methods=['GET','POST'])
def insertAppointment():
    data = request.get_json()
    raw_data = inputFormFunctions.insertAppointment(data)
    return json.dumps(raw_data)

@app.route("/getExerciseCalories", methods=['GET','POST'])
def getExerciseCalories():
    raw_data = inputFormFunctions.getExerciseCalories()
    return json.dumps(raw_data)

@app.route("/getAppointments", methods=['GET','POST'])
def getAppointments():
    data = request.get_json()
    raw_data = appointmentsFunction.getAll(data)
    return json.dumps(raw_data)


@app.route("/getAppointmentsHomePage", methods=['GET','POST'])
def getAppointmentsHomePage():
    data = request.get_json()
    raw_data = appointmentsFunction.getAllHomePage(data)
    return json.dumps(raw_data)

@app.route("/getFood", methods=['GET','POST'])
def getFood():
    data = request.get_json()
    food_data = foodFunction.getFood_all(data)
    return json.dumps(food_data)


@app.route("/getarticles", methods=['GET','POST'])
def getarticles():
    data = request.get_json()
    food_data = foodFunction.get_articles(data)
    return json.dumps(food_data)

@app.route("/getFoodHomePage", methods=['GET','POST'])
def getFoodHomePage():
    data = request.get_json()
    food_data = foodFunction.getFood_all_homePage(data)
    return json.dumps(food_data)

@app.route("/getCaloriesBurnedHomePage", methods=['GET','POST'])
def getCaloriesBurnedHomePage():
    data = request.get_json()
    food_data = exerciseFunction.getcaloriesBurned_all_homePage(data)
    return json.dumps(food_data)



@app.route("/getExercise", methods=['GET','POST'])
def getExercise():
    data = request.get_json()
    exercise_data = exerciseFunction.getExercise_all(data)
    return json.dumps(exercise_data)

# Dashboard page functions Start
@app.route("/getDashboardCaloriesConsumed", methods=['GET','POST'])
def getDashboardCaloriesConsumed():
    data = request.get_json()
    food_data = dashboardPageFunctions.getDashboard_calories_consumed(data)
    return json.dumps(food_data)

@app.route("/getDashboardCaloriesBurned", methods=['GET','POST'])
def getDashboardCaloriesBurned():
    data = request.get_json()
    food_data = dashboardPageFunctions.getDashboard_calories_burned(data)
    return json.dumps(food_data)


@app.route("/getDashboardTop5caloriesConsumed", methods=['GET','POST'])
def getDashboardTop5caloriesConsumed():
    data = request.get_json()
    food_data = dashboardPageFunctions.getDashboard_top5calories_consumed(data)
    return json.dumps(food_data)


@app.route("/getDashboardTop5exercises", methods=['GET','POST'])
def getDashboardTop5exercises():
    data = request.get_json()
    food_data = dashboardPageFunctions.getDashboard_top5exercises(data)
    return json.dumps(food_data)

# Dashboard Page Functions End



if __name__ == "__main__":
     app.run(host='0.0.0.0')

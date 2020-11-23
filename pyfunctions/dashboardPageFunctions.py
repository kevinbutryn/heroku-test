import runDBQuery as runQuery

def getDashboard_calories_consumed(data):

    if data['type'] == 'total':
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
    else:
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time <= current_date and when_eaten = \'"""+data['type']+"""\' GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date and when_eaten = \'"""+data['type']+"""\' GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records


def getDashboard_top5calories_consumed(data):
    if data['timePeriod']=='alltime':
        query = """select food_name, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time <= current_date and when_eaten = \'"""+data['type']+"""\' GROUP BY food_name ORDER BY sum DESC LIMIT 5;"""
        # query = """select * from food where email = \'"""+data['email']+"""\';"""
        records = runQuery.queryDB(query)
        return records
    else:
        query = """select food_name, SUM(calories) from food where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date and when_eaten = \'"""+data['type']+"""\' GROUP BY food_name ORDER BY sum DESC LIMIT 5;"""
        # query = """select * from food where email = \'"""+data['email']+"""\';"""
        records = runQuery.queryDB(query)
        return records


def getDashboard_top5exercises(data):
    if data['type']=='caloriesburned':
        if data['timePeriod']=='alltime':
            query = """select exercise_name, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY exercise_name ORDER BY sum DESC LIMIT 5;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select exercise_name, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY exercise_name ORDER BY sum DESC LIMIT 5;"""
            records = runQuery.queryDB(query)
            return records
    else:
        if data['timePeriod']=='alltime':
            query = """select exercise_name, SUM(cast (duration as float)) from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY exercise_name ORDER BY sum DESC LIMIT 5;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select exercise_name, SUM(cast (duration as float)) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY exercise_name ORDER BY sum DESC LIMIT 5;"""
            records = runQuery.queryDB(query)
            return records


def getDashboard_calories_burned(data):
    if data['type'] == 'total':
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
    elif data['type']=='duration':
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(cast (duration as float))  from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(cast (duration as float))  from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            # query = """select * from food where email = \'"""+data['email']+"""\';"""
            records = runQuery.queryDB(query)
            return records
    else:
        if data['timePeriod']=='alltime':
            # query = """select date_time, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            query = """SELECT CASE WHEN a.date_time IS NULL THEN b.date_time ELSE a.date_time END AS date_time, COALESCE(caloriesconsumed,0)-COALESCE(calorieburned,0) as energy FROM (select date_time, SUM(caloriesburned) as calorieBurned from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time) a FULL OUTER JOIN (select date_time, SUM(calories) as caloriesconsumed from food where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time) b ON a.date_time=b.date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            # query = """select date_time, SUM(caloriesburned) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            query = """SELECT CASE WHEN a.date_time IS NULL THEN b.date_time ELSE a.date_time END AS date_time, COALESCE(caloriesconsumed,0)-COALESCE(calorieburned,0) as energy FROM (select date_time, SUM(caloriesburned) as calorieBurned from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time) a FULL OUTER JOIN (select date_time, SUM(calories) as caloriesconsumed from food where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time) b ON a.date_time=b.date_time;"""
            records = runQuery.queryDB(query)
            return records

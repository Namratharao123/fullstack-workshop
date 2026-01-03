SELECT 
    department,
    COUNT(*) AS employee_count,
    ROUND(AVG(salary), 2) AS avg_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;





-- use sqlchallenges;

-- CREATE TABLE employees (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(100),
--     department VARCHAR(50),
--     salary DECIMAL(10,2),
--     hire_date DATE,
--     manager_id INT
-- );

-- CREATE TABLE projects (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(100),
--     budget DECIMAL(12,2),
--     start_date DATE,
--     end_date DATE
-- );

-- CREATE TABLE assignments (
--     employee_id INT,
--     project_id INT,
--     role VARCHAR(50),
--     hours_allocated INT,
--     PRIMARY KEY (employee_id, project_id)
-- );
const { createClient } = require('@supabase/supabase-js');
const { sequelize } = require("../../models/connect/db.config.js");
const supabaseUrl = 'https://hhdgpzmvtgohvkxvmgab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZGdwem12dGdvaHZreHZtZ2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NDExMDMsImV4cCI6MjAzMDMxNzEwM30.jERLllNgb92QjGn0CRanFnDcqT1EbXgqzXsRSAtA22s';
const supabase = createClient('https://hhdgpzmvtgohvkxvmgab.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZGdwem12dGdvaHZreHZtZ2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NDExMDMsImV4cCI6MjAzMDMxNzEwM30.jERLllNgb92QjGn0CRanFnDcqT1EbXgqzXsRSAtA22s');


async function interactWithDatabases() {
    try {
        // Aquí puedes realizar operaciones con tu base de datos Oracle
        // Por ejemplo:
        const oracleData = await sequelize.query('SELECT DISTINCT IMAGEN FROM V_VISTA_IMAGENES_COPADELMUNDO');
        console.log('Datos obtenidos de la base de datos Oracle:', oracleData);

        // Y también puedes realizar operaciones con tu base de datos en la nube (Supabase)
        const { data, error } = await supabase
            .from('UserLogin')
            .select('*');
        console.log('Datos obtenidos de Supabase:', data);

        if (error) {
            console.error('Error al obtener datos de Supabase:', error.message);
            return;
        }

        console.log('Datos obtenidos de Supabase:', data);
    } catch (error) {
        console.error('Error al interactuar con las bases de datos:', error);
    }
}

module.exports = { interactWithDatabases };

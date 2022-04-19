import React from 'react';

const DoctorInfo = () => {
    return (
        <div class="container mt-5">
            <h1 class="text-center mt-5 mb-5 fw-bold text-primary">Doctor Introduction</h1>
            <div class="row">
                <div class="col-6 bg-primary">
                    <h1 class='text-warning fw-bold mt-5'>Dr. Paul Sirek, DDS, MSc, HBSc</h1>
                    <h4 class='text-white mt-3'>Dentist</h4>
                    <p class='text-white mt-5'>Dr. Paul Sirek received his Bachelor of Science degree in Psychology from McMaster University and a Master of Science degree in Clinical Anatomy at Western University. Dr. Sirek completed his Doctor of Dental Surgery degree at the University of Toronto.</p>

                    <p class='text-white mt-4'>To make dental visits more relaxing for our Midtown Dental patients, Dr. Sirek has completed a moderate sedation certification!</p>

                    <p class='text-white mt-4'>Dr. Sirek also has experience as a Clinical Instructor at the University of Toronto Dental School!</p>

                    <p class='text-white mt-4'>Dr. Sirek enjoys spending time with his wife and son, skiing, hiking, cooking, and travelling.</p>
                    
                    <p class='text-white mt-4'>In his free time, Dr. Sirek enjoys baking bread, running, swimming and is always looking for an excuse to get out for landscape photography.</p>
                </div>
                <div class="col-6">
                    <img class='img-fluid' src="https://midtowndental.ca/wp-content/uploads/2022/04/Yu6B8HNjPVqJB_uBJWA1pNgwg03Nm5L7cA-scaled.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;
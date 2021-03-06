import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './detail.css'

const myData=[
    {
      id: 1,
      name: "Headache Pain",
      description: "Headaches affect all ages, races, and socioeconomic classes,” says Shaheda Quraishi, MD, a physiatrist at North Shore-LIJ’s Cushing Neuroscience Institute in Great Neck, New York. The four most common types of headaches are vascular — like a migraine; muscle contraction — also known as tension",
      image: "https://i.ibb.co/cwk1d4m/head.jpg",
      doctor: "Cordula"
    },
    {
      id: 2,
      name: "Back Pain",
      description: "If you haven't experienced back pain, chances are good that you will. Back pain strikes eight of every 10 people at some point in their lives, according to the National Institutes of Health (NIH). Back pain can come on sharp and suddenly, or it can last for years as a dull ache. It can affect anywhere from just above your pelvis to the base of your neck.",
      image: "https://i.ibb.co/Z8VKZQB/back.jpg",
      doctor: "Beitris"
    },
    {
      id: 3,
      name: "Neck Pain",
      description: "Neck pain typically increases with age, says Brian Durkin, DO, director at the Center for Pain Management at Stony Brook University Medical Center in Stony Brook, New York. It often stems from such sources as osteoarthritis and degenerative disc disease, but acute injuries — a car accident, for instance — can leave people with neck pain as well, he says.",
      image: "https://i.ibb.co/dDHPHJM/rear-view-of-man-suffering-from-neck-pain.jpg",
      doctor: "Irwinn"
    },
    {
      id: 4,
      name: "Fibromyalgia",
      description: "Fibromyalgia, a condition that involves widespread pain and tenderness at various points on the body, most often strikes women between the ages of 30 and 60, Dr. Durkin says. It can cause fatigue and interfere with a person’s daily activities, according to the National Institute of Arthritis and Musculoskeletal and Skin Diseases. ",
      image: "https://i.ibb.co/PcFjwMs/neck.jpg",
      doctor: "Horatia"
    },
    {
      id: 5,
      name: "Muscle Pain",
      description: "People often try to do things their muscles aren’t trained to do, says John Stamatos, MD, director of pain management at Syosset Hospital in Syosset, New York. “If I told you to go to the gym and lift weights for three hours straight, you’d look at me like I was nuts, he says.",
      image: "https://i.ibb.co/LSz5jLt/muscule.jpg",
      doctor: "Yoshi"
    },
    {
      id: 6,
      name: "Osteoarthritis",
      description: "Osteoarthritis is the type of arthritis caused by the breakdown of cartilage that normally keeps the bones in a joint — like your knee — from rubbing against each other. Most often it's caused by the simple wear-and-tear brought on by use of the joint, but sports- or work-related injuries sometimes play a role as well. Over time, arthritic joints become painful and stiff. ",
      image: "https://i.ibb.co/G3zXcqq/Osteoarthritis.jpg",
      doctor: "Aimee"
    },
    {
      id: 7,
      name: "Pelvic Pain",
      description: "Pelvic pain is more common in women but can affect men, too, Durkin says. Common causes include painful menstrual cramps, endometriosis, pain during ovulation (called mittelschmerz), and urinary tract infection. ",
      image: "https://i.ibb.co/s6W5DD6/pelvic-pain.jpg",
      doctor: "Ryon"
    },
    {
      id: 8,
      name: "Abdominal Pain",
      description: "Dr. Stamatos says that abdominal pain often develops because people “ate the extra chicken wing they knew they shouldn’t have.” The best remedy for the resulting indigestion is to simply wait it out and skip that food the next time. Other common causes of abdominal pain include constipation, irritable bowel syndrome, food poisoning, and stomach viruses. ",
      image: "https://i.ibb.co/TqhXwDP/abdominal.jpg",
      doctor: "Elise"
    },
    {
      id: 9,
      name: "Ischemic Pain",
      description: "Ischemic pain results from collapsed blood vessels that carry blood throughout the body,” Stamatos says. A heart attack is one example. More commonly, ischemic pain takes the form of peripheral vascular disease (PVD), which causes achy pain in the legs is due to a lack of blood flow, he says.",
      image: "https://i.ibb.co/NTRVBcF/ischemic.jpg",
      doctor: "Forest"
    },
    {
      id: 10,
      name: "Cancer Pain",
      description: "When pain is cancer-related, its origin may be in the cancer itself, or it may stem from cancer treatments, like surgery, according to the American Cancer Society. In most cases, though, the discomfort comes from the tumor pushing on bones, nerves, or organs. Doctors usually treat cancer pain with medications, called analgesics. ",
      image: "https://i.ibb.co/cw47hRZ/cancer.jpg",
      doctor: "Raeann"
    },
    {
      id: 11,
      name: "radicular pain",
      description: "Radicular pain is a type of pain that radiates from your back and hip into your legs through the spine. The pain travels along the spinal nerve root. The leg pain can be accompanied by numbness, tingling, and muscle weakness. Radicular pain occurs when the spinal nerve gets compressed (pinched) or inflamed.",
      image: "https://i.ibb.co/VwMxZKK/redicular.jpg",
      doctor: "Matthieu"
    },
    {
      id: 12,
      name: "Acute pain",
      description: "Acute pain means the pain is short in duration (relatively speaking), lasting from minutes to about three months (sometimes up to six months). Acute pain also tends to be related to a soft-tissue injury or a temporary illness, so it typically subsides after the injury heals or the illness subsides. Acute pain from an injury may evolve into chronic pain if the injury doesn’t heal correctly or if the pain signals malfunction.",
      image: "https://i.ibb.co/QX17k6g/acute.jpg",
      doctor: "Melisa"
    },
    {
      id: 13,
      name: "Chronic pain",
      description: "Chronic pain is longer in duration. It can be constant or intermittent. For example, headaches can be considered chronic pain when they continue over many months or years – even if the pain isn’t always present. Chronic pain is often due to a health condition, like arthritis, fibromyalgia, or a spine condition.",
      image: "https://i.ibb.co/VB5Nt2q/Young-african-american-man-with-back-pain-pressing-on-hip-with-painful-expression-sitting-on-sofa-at.jpg",
      doctor: "Rianon"
    },
    {
      id: 14,
      name: "Neuropathic pain",
      description: "Neuropathic pain is due to damage to the nerves or other parts of the nervous system. It is often described as shooting, stabbing, or burning pain, or it feels like pins and needles. It can also affect sensitivity to touch and can make someone have difficulty feeling hot or cold sensations.",
      image: "https://i.ibb.co/pf7Wn5P/health-care-concept-Close-up-woman-holding-her-wrist-Pain-in-the-joints-of-the-hands-Carpal-tunnel-s.jpg",
      doctor: "Dolley"
    },
    {
      id: 15,
      name: "Nociceptive pain",
      description: "Nociceptive pain is a type of pain caused by damage to body tissue. People often describe it as being a sharp, achy, or throbbing pain. It’s often caused by an external injury. For example, if you hit your elbow, stub your toe, twist your ankle, or fall and scrape up your knee, you may feel nociceptive pain.",
      image: "https://i.ibb.co/zn8PtjF/nociceptive.jpg",
      doctor: "Kathryne"
    },
    {
      id: 16,
      name: "Knee Pain",
      description: "For some people, knee pain goes away on its own. For others, medication or physical therapy may provide relief. If the treatments you’ve tried so far haven’t worked, don’t get discouraged. Beaumont’s experts will help you decide the next steps to relieve your pain and increase your mobility.",
      image: "https://i.ibb.co/dJmJBkQ/Photo-of-mature-elderly-man-sitting-on-a-sofa-in-the-living-room-at-home-and-touching-his-knee-by-th.jpg",
      doctor: "Julita"
    },
    {
      id: 17,
      name: "Keri",
      description: "Spraging",
      image: "Hebert",
      doctor: "Saraann"
    },
    {
      id: 18,
      name: "Kendricks",
      description: "Rooksby",
      image: "Brittany",
      doctor: "Florian"
    },
    {
      id: 19,
      name: "Merwyn",
      description: "Entwisle",
      image: "Ryun",
      doctor: "Aeriela"
    },
    {
      id: 20,
      name: "Francyne",
      description: "Howard",
      image: "Garrik",
      doctor: "Spenser"
    }
  ]
const Detail = () => {
    // console.log(myData)
    const {serviceId}=useParams();
    const service=myData.find(s=>s.id==serviceId)
    console.log(serviceId,service);
    return (
        <div className="detail-container d-flex flex-sm-column flex-lg-row jsutify-content-around container">
            <div>
                <img style={{height:"100%"}} src={service.image} alt="" />
            </div>
            <div>
                <h3>{service.name}</h3>
                <p>Doctor: {service.doctor}</p>
                <p>{service.description}</p>
            </div>

        </div>
    );
};

export default Detail;<h1>This is detail</h1>
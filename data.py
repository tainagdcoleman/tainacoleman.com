websites = {
    "Tainã Coleman": "https://Tainãcoleman.com",
    "Rafael Ferreira da Silva": "https://rafaelsilva.com/",
    "Frédéric Suter": "https://www.ornl.gov/staff-profile/fred-suter",
    "Henri Casanova": "https://henricasanova.github.io/",
    "Ewa Deelman": "https://deelman.isi.edu/",
    "Ju Cheol Moon": "https://scholar.google.com/citations?user=0Yw0wbYAAAAJ&hl=en",
    "Ty Gwartney": "https://ty-gwartney.github.io/",
    "Loïc Pottier": "https://loicpottier.com/",
    "Jared Coleman": "https://jaredraycoleman.com/",

    "Hena Ahmed": "https://scil.ucsd.edu/hena-ahmed",
    "Ravi Shende": "https://scil.ucsd.edu/ravi-shende",
    "Ismael Perez": "https://scil.ucsd.edu/index.php/ismael-perez",
    "Ïlkay Altintaş": "https://scil.ucsd.edu/ilkay/",
}



pubs = [
    {   
        "title": "A terminology for scientific workflow systems",
        "venue": "Future Generation Computer Systems",
        "authors": [
            "Frédéric Suter", "Tainã Coleman", "İlkay Altintaş", "Rosa M Badia", "Bartosz Balis", "Kyle Chard", "Iacopo Colonnelli", "Ewa Deelman", "Paolo Di Tommaso", "Thomas Fahringer", "Carole Goble", "Shantenu Jha", "Daniel S Katz", "Johannes Köster", "Ulf Leser", "Kshitij Mehta", "Hilary Oliver", "J-Luc Peterson", "Giovanni Pizzi", "Loïc Pottier", "Raül Sirvent", "Eric Suchyta", "Douglas Thain", "Sean R Wilkinson", "Justin M Wozniak", "Rafael Ferreira da Silva"
        ],
        "links":{
            "pdf":"https://arxiv.org/pdf/2506.07838",
        },
        "abstract": (
            "The term “scientific workflow” has evolved over the last two decades to encompass a broad range of compositions of interdependent compute tasks and data movements. It has also become an umbrella term for processing in modern scientific applications. Today, many scientific applications can be considered as workflows made of multiple dependent steps, and hundreds of workflow systems have been developed to manage and run these scientific workflows. However, no turnkey solution has emerged from the field to address the diversity of scientific processes and the infrastructure on which they are supposed to be implemented. Instead, new research problems requiring the execution of scientific workflows with some novel feature often lead to the development of an entirely new workflow system. A direct consequence of this situation is that many existing workflow management systems (WMSs) share some salient features, offer similar functionalities, and can manage the same categories of workflows but at the same time also have some distinct capabilities that can be important for specific applications. This situation makes researchers who develop workflows face the complex question of selecting a WMS. This selection can be driven by technical considerations, to find the system that is the most appropriate for their application and for the computing and storage resources available to them, or other factors such as reputation, adoption, strong community support, or long-term sustainability. To address this problem, a group of WMS developers and practitioners joined their efforts to produce a community-based terminology of WMSs. This paper summarizes their findings and introduces this new terminology to characterize WMSs. This terminology is composed of fives axes: workflow structure and characteristics, composition, orchestration, data management, and metadata capture. Each axis comprises several concepts that capture the prominent features of WMSs. Based on this terminology, this paper also presents a classification of 23 existing WMSs according to the proposed axes and terms."
        )
    },
    {   
        "title": "Banditware: A Contextual Bandit-based Framework for Hardware Prediction",
        "venue": "To Appear at I4Sys @ Symposium on High-Performance Parallel and Distributed Computing (HPDC), 2025",
        "authors": ["Tainã Coleman", "Hena Ahmed", "Ravi Shende", "Ismael Perez", "Ïlkay Altintaş"],
        "links":{
            "pdf":"https://arxiv.org/pdf/2506.13730",
        },
        "abstract": (
            "Distributed computing systems are essential for meeting the demands of modern applications, yet transitioning from single-system to distributed environments presents significant challenges. Misallocating resources in shared systems can lead to resource contention, system instability, degraded performance, priority inversion, inefficient utilization, increased latency, and environmental impact. "
            "We present BanditWare, an online recommendation system that dynamically selects the most suitable hardware for applications using a contextual multi-armed bandit algorithm. BanditWare balances exploration and exploitation, gradually refining its hardware recommendations based on observed application performance while continuing to explore potentially better options. Unlike traditional statistical and machine learning approaches that rely heavily on large historical datasets, BanditWare operates online, learning and adapting in real-time as new workloads arrive. "
            "We evaluated BanditWare on three workflow applications: Cycles (an agricultural science scientific workflow) BurnPro3D (a web-based platform for fire science) and a matrix multiplication application. Designed for seamless integration with the National Data Platform (NDP), BanditWare enables users of all experience levels to optimize resource allocation efficiently."
        )
    },
    {
        "title": "Workflows Community Summit 2024: Future Trends and Challenges in Scientific Workflows",
        "venue": "osti.gov",
        "authors": [
            "Deborah Bard", "Kyle Chard", "Shaun de Witt", "Ian T Foster", "Carole Goble", "William Godoy", "Johan Gustafsson", "Utz-Uwe Haus", "Stephen Hudson", "Laila Los", "Drew Paine", "Frédéric Suter", "Logan Ward", "Sean Wilkinson", "Marcos Amaris", "Yadu Babuji", "Jonathan Bader", "Riccardo Balin", "Daniel Balouek", "Sarah Beecroft", "Khalid Belhajjame", "Rajat Bhattarai", "Wes Brewer", "Paul Brunk", "Silvina Caino-Lores", "Henri Casanova", "Daniela Cassol", "Jared Coleman", "Taina Coleman", "Iacopo Colonnelli", "Anderson Andrei Da Silva", "Daniel de Oliveira", "Pascal Elahi", "Nour Elfaramawy", "Wael Elwasif", "Brian Etz", "Thomas Fahringer", "Wesley Ferreira", "Rosa Filgueira", "Jacob Fosso Tande", "Luiz Gadelha", "Andy Gallo", "Daniel Garijo", "Yiannis Georgiou", "Philipp Gritsch", "Patricia Grubel", "Amal Gueroudji", "Quentin Guilloteau", "Carlo Hamalainen", "Rolando Hong Enriquez", "Lauren Huet", "Kevin Hunter Kesling", "Paula Iborra", "Shiva Jahangiri", "Jan Janssen", "Joe Jordan", "Sehrish Kanwal", "Liliane Kunstmann", "Fabian Lehmann", "Ulf Leser", "Peini Liu", "Jakob Luettgau", "Richard Lupat", "Jose M Fernandez", "Ketan Maheshwari", "Tanu Malik", "Jack Marquez", "Motohiko Matsuda", "Doriana Medic", "Somayeh Mohammadi", "Alberto Mulone", "John-Luke Navarro", "Kin Wai Ng", "Klaus Noelp", "Bruno P Kinoshita", "Ryan Prout", "Michael R Crusoe", "Sashko Ristov", "Stefan Robila", "Daniel Rosendo", "Billy Rowell", "Jedrzej Rybicki", "Hector Sanchez", "Nishant Saurabh", "Sumit Kumar Saurav", "Tom Scogland", "Dinindu Senanayake", "Woong Shin", "Raul Sirvent", "Tyler Skluzacek", "Barry Sly-Delgado", "Stian Soiland-Reyes", "Abel Souza", "Renan Souza", "Domenico Talia", "Nathan Tallent", "Lauritz Thamsen", "Mikhail Titov", "Benjamin Tovar", "Karan Vahi", "Eric Vardar-Irrgang", "Edite Vartina", "Yuandou Wang", "Merridee Wouters", "Qi Yu", "Ziad Al Bkhetan", "Mahnoor Zulfiqar"
        ],
        "links": {
            "pdf": "https://www.osti.gov/servlets/purl/2474744"
        },
        "abstract": "The 2024 Workflows Community Summit report presents the outcomes of a three-day international gathering that brought together 109 experts from 18 countries to discuss future trends and challenges in scientific workflows. The summit focused on six key areas: time-sensitive workflows, convergence of AI and HPC workflows, multi-facility workflows, heterogeneous HPC environments, user experience and interfaces, and FAIR computational workflows. Discussions highlighted emerging challenges such as integrating AI with traditional HPC, managing workflows across diverse facilities, addressing heterogeneity in computing environments, and ensuring workflows are findable, accessible, interoperable, and reusable (FAIR). The report outlines recent advances, ongoing challenges, and provides recommendations for each topic area, emphasizing the need for standardization, improved interoperability, and the development of more sophisticated tools and frameworks to support the evolving landscape of scientific workflows in the era of exascale computing and AI integration."
    },
    {
        "title": "Automated generation of scientific workflow generators with WfChef",
        "venue": "Future Generation Computer Systems",
        "authors": ["Tainã Coleman", "Henri Casanova", "Rafael Ferreira Da Silva"],
        "links":{
            "pdf":"https://www.sciencedirect.com/science/article/abs/pii/S0167739X23001711",
        },
        "abstract": ("Scientific workflow applications have gained significant importance, and their automated and efficient execution on large-scale computing platforms has been the subject of extensive research and development. For these efforts to be successful, a solid experimental methodology is needed to evaluate workflow algorithms and systems. A foundation for this methodology is the availability of realistic workflow instances. Although public repositories provide workflow instances for a few scientific applications, these are limited in scope, and workflow instances are not available for all application scales of interest. To address this limitation, previous work has developed generators of synthetic workflow instances of arbitrary scales. Despite being popular, the implementation of these generators is a manual and labor-intensive process that requires expert application knowledge. As a result, these generators only target a handful of applications, even though there are hundreds of workflow applications in production." 
        "We introduce WfChef , a fully automated framework for constructing a synthetic workflow generator for any scientific application. Based on an input set of workflow instances for a particular application, WfChef automatically produces a synthetic workflow generator. To measure the realism of the generated workflows, we define and evaluate several metrics. Using these metrics, we compare the realism of the workflows generated by WfChef generators to that of the workflows generated by the previously available, hand-crafted generators. We find that WfChef generators not only require zero development effort (because they are automatically produced), but also generate workflows that are more realistic than those generated by hand-crafted generators.")
    },
    {
        "title": "Workflows Community Summit 2022: A Roadmap Revolution",
        "venue": "osti.gov",
        "authors": ["Rafael Ferreira Da Silva", "Rosa Badia", "Venkat Bala", "Deborah Bard", "Peer-Timo Bremer", "Ian Buckley", "Silvina Caino-Lores", "Kyle Chard", "Carole Goble", "Shantenu Jha", "Daniel S Katz", "Daniel Laney", "Manish Parashar", "Frédéric Suter", "Nick Tyler", "Thomas Uram", "Ilkay Altintas", "Stefan Andersson", "William Arndt", "Juan Aznar", "Jonathan Bader", "Bartosz Balis", "Christopher Blanton", "Kelly Braghetto", "Aharon Brodutch", "Paul Brunk", "Henri Casanova", "Alba Lierta", "Justin Chigu", "Tainã Coleman", "Nick Collier", "Iacopo Colonnelli", "Frederik Coppens", "Michael Crusoe", "Will Cunningham", "Bruno Kinoshita", "Paolo Di Tomasso", "Charles Doutriaux", "Matthew Downton", "Wael Elwasif", "Bjoern Enders", "Christopher Erdmann", "Thomas Fahringer", "Ludmilla Figueiredo", "Rosa Filgueira", "Martin Foltin", "Anne Fouilloux", "Luiz Gadelha", "Andy Gallo", "Artur Garcia", "Daniel Garijo", "Roman Gerlach", "Ryan E Grant", "Samuel Grayson", "Patricia Grubel", "Johan Gustafsson", "Valerie Hayot", "Oscar Hernandez Mendoza", "Marcus Hilbrich", "Annmary Justine", "Ian Laflotte", "Fabian Lehmann", "Andre Luckow", "Jakob Luettgau", "Ketan Maheshwari", "Motohiko Matsuda", "Doriana Medic", "Pete Mendygral", "Marek Michalewicz", "Jorji Nonaka", "Maciej Pawlik", "Loic Pottier", "Line Pouchard", "Mathias Putz", "Santosh Radha", "Lavanya Ramakrishnan", "Sashko Ristov", "Paul Romano", "Daniel Rosendo", "Martin Ruefenacht", "Katarzyna Rycerz", "Nishant Saurabh", "Volodymyr Savchenko", "Martin Schulz", "Christine Simpson", "Raul Sirvent", "Tyler Skluzacek", "Stian Reyes", "Renan Santos Souza", "Sreenivas R Sukumar", "Ziheng Sun", "Alan Sussman", "Douglas Thain", "Mikhail Titov", "Benjamin Tovar", "Aalap Tripathy", "Matteo Turilli", "Bartosz Tuznik", "Hubertus van Dam", "Aurelio Vivas", "Logan Ward", "Patrick Widener", "Sean Wilkinson", "Justyna Zawalska", "Mahnoor Zulfiqar"],
        "links": {
            "pdf": "https://www.osti.gov/servlets/purl/2006942"
        },
        "abstract": ("Scientific workflows have become integral tools in broad scientific computing use cases. Science discovery is increasingly dependent on workflows to orchestrate large and complex scientific experiments that range from the execution of a cloud-based data preprocessing pipeline to multi-facility instrument-toedge-to-HPC computational workflows. Given the changing landscape of scientific computing (often referred to as a computing continuum) and the evolving needs of emerging scientific applications, it is paramount that the development of novel scientific workflows and system functionalities seek to increase the efficiency, resilience, and pervasiveness of existing systems and applications. Specifically, the proliferation of machine learning/artificial intelligence (ML/AI) workflows, need for processing large-scale datasets produced by instruments at the edge, intensification of near real-time data processing, support for long-term experiment campaigns, and emergence of quantum computing as an adjunct to HPC, have significantly changed the functional and operational requirements of workflow systems. Workflow systems now need to, for example, support data streams from the edge-to-cloud-to-HPC, enable the management of many small-sized files [6], allow data reduction while ensuring high accuracy, orchestrate distributed services (workflows, instruments, data movement, provenance, publication, etc.) across computing and user facilities, among others. Further, to accelerate science, it is also necessary that these systems implement specifications/standards and APIs for seamless (horizontal and vertical) integration between systems and applications, as well as enable the publication of workflows and their associated products according to the FAIR principles.")
    },
    {   
        "title": "Wfbench: Automated generation of scientific workflow benchmarks",
        "venue": "2022 IEEE/ACM International Workshop on Performance Modeling, Benchmarking and Simulation of High Performance Computer Systems (PMBS)",
        "pages": "100-111",
        "authors": ["Tainã Coleman", "Henri Casanova", "Ketan Maheshwari", "Loïc Pottier", "Sean R Wilkinson", "Justin Wozniak", "Frédéric Suter", "Mallikarjun Shankar", "Rafael Ferreira Da Silva"],
        "links":{
            "pdf":"https://ieeexplore.ieee.org/abstract/document/10024036",
        },
        "abstract": ("The prevalence of scientific workflows with high computational demands calls for their execution on various distributed computing platforms, including large-scale leadership-class high-performance computing (HPC) clusters. To handle the deployment, monitoring, and optimization of workflow executions, many workflow systems have been developed over the past decade. There is a need for workflow benchmarks that can be used to evaluate the performance of workflow systems on current and future software stacks and hardware platforms.We present a generator of realistic workflow benchmark specifications that can be translated into benchmark code to be executed with current workflow systems. Our approach generates workflow tasks with arbitrary performance characteristics (CPU, memory, and I/O usage) and with realistic task dependency structures based on those seen in production workflows. We present experimental results that show that our approach generates benchmarks that are representative of production workflows, and conduct a case study to demonstrate the use and usefulness of our generated benchmarks to evaluate the performance of workflow systems under different configuration scenarios.")
    },
    {   "title": "WfCommons: A Framework for Enabling Scientific Workflow Research and Development",
        "venue": "Future Generation Computer Systems",
        "volume": "128",
        "pages": "16-27",
        "authors": ["Tainã Coleman","Henri Casanova", "Loïc Pottier", "Manav Kaushik", "Ewa Deelman", "Rafael Ferreira da Silva"],
        "links":{
            "pdf":"https://arxiv.org/abs/2105.14352",
        },
        "abstract": ("Scientific workflows are a cornerstone of modern scientific computing. They are used to describe complex computational applications that require efficient and robust management of large volumes of data, which are typically stored/processed on heterogeneous, distributed resources. The workflow research and development community has employed a number of methods for the quantitative evaluation of existing and novel workflow algorithms and systems. In particular, a common approach is to simulate workflow executions. In previous works, we have presented a collection of tools that have been adopted by the community for conducting workflow research. Despite their popularity, they suffer from several shortcomings that prevent easy adoption, maintenance, and consistency with the evolving structures and computational requirements of production workflows. In this work, we present WfCommons, a framework that provides a collection of tools for analyzing workflow executions, for producing generators of synthetic workflows, and for simulating workflow executions. We demonstrate the realism of the generated synthetic workflows by comparing their simulated executions to real workflow executions. We also contrast these results with results obtained when using the previously available collection of tools. We find that the workflow generators that are automatically constructed by our framework not only generate representative same-scale workflows (i.e., with structures and task characteristics distributions that resemble those observed in real-world workflows), but also do so at scales larger than that of available real-world workflows. Finally, we conduct a case study to demonstrate the usefulness of our framework for estimating the energy consumption of large-scale workflow executions.")
    },
    {
        "title": "A Community Roadmap for Scientific Workflows Research and Development",
        "venue": "arXiv preprint",
        "authors": ["Rafael Ferreira da Silva", "Henri Casanova", "Kyle Chard", "Ilkay Altintas", "Rosa M Badia", "Bartosz Balis", "Tainã Coleman", "Frederik Coppens", "Frank Di Natale", "Bjoern Enders", "Thomas Fahringer", "Rosa Filgueira", "Grigori Fursin", "Daniel Garijo", "Carole Goble", "Dorran Howell"," Shantenu Jha", "Daniel S. Katz", "Daniel Laney", "Ulf Leser", "Maciej Malawski", "Kshitij Mehta", "Loïc Pottier", "Jonathan Ozik", "J. Luc Peterson", "Lavanya Ramakrishnan"," Stian Soiland-Reyes", "Douglas Thain", "Matthew Wolf"],
        "links": {
            "pdf": "https://arxiv.org/abs/2110.02168"
        },
        "abstract": ("The landscape of workflow systems for scientific applications is notoriously convoluted with hundreds of seemingly equivalent workflow systems, many isolated research claims, and a steep learning curve. To address some of these challenges and lay the groundwork for transforming workflows research and development, the WorkflowsRI and ExaWorks projects partnered to bring the international workflows community together. This paper reports on discussions and findings from two virtual 'Workflows Community Summits' (January and April, 2021). The overarching goals of these workshops were to develop a view of the state of the art, identify crucial research challenges in the workflows community, articulate a vision for potential community efforts, and discuss technical approaches for realizing this vision. To this end, participants identified six broad themes: FAIR computational workflows; AI workflows; exascale challenges; APIs, interoperability, reuse, and standards; training and education; and building a workflows community. We summarize discussions and recommendations for each of these themes.")
    },
    {
        "title": "Evaluating energy-aware scheduling algorithms for I/O-intensive scientific workflows",
        "venue": "International Conference on Computational Science (ICCS)",
        "authors": ["Tainã Coleman", "Henri Casanova", "Ty Gwartney", "Rafael Ferreira da Silva"],
        "links": {
            "pdf": "https://rafaelsilva.com/files/publications/coleman2021iccs.pdf"
        },
        "abstract": ("Improving energy efficiency has become necessary to enable susTainãble computational science. At the same time, scientific workflows are key in facilitating distributed computing in virtually all domain sciences. As data and computational requirements increase, I/O-intensive workflows have become prevalent. In this work, we evaluate the ability of two popular energy-aware workflow scheduling algorithms to provide effective schedules for this class of workflow applications, that is, schedules that strike a good compromise between workflow execution time and energy consumption. These two algorithms make decisions based on a widely used power consumption model that simply assumes linear correlation to CPU usage. Previous work has shown this model to be inaccurate, in particular for modeling power consumption of I/O-intensive workflow executions, and has proposed an accurate model. We evaluate the effectiveness of the two aforementioned algorithms based on this accurate model. We find that, when making their decisions, these algorithms can underestimate power consumption by up to 360%, which makes it unclear how well these algorithm would fare in practice. To evaluate the benefit of using the more accurate power consumption model in practice, we propose a simple scheduling algorithm that relies on this model to balance the I/O load across the available compute resources. Experimental results show that this algorithm achieves more desirable compromises between energy consumption and workflow execution time than the two popular algorithms.")
    },
    {
        "title": "Workflows Community Summit: Bringing the Scientific Workflows Community Together",
        "venue": "Zenodo",
        "authors": ["Rafael Ferreira da Silva", "Henri Casanova", "Kyle Chard", "Dan Laney", "Dong Ahn", "Shantenu Jha", "Carole Goble", "Lavanya Ramakrishnan", "Luc Peterson", "Bjoern Enders", "Douglas Thain", "Ilkay Altintas", "Yadu Babuji", "Rosa M. Badia", "Vivien Bonazzi", "Tainã Coleman", "Michael Crusoe", 
        "Ewa Deelman", "Frank Di Natale", "Paolo Di Tommaso", "Thomas Fahringer", "Rosa Filgueira", "Grigori Fursin", "Alex Ganose", "Bjorn Gruning", "Daniel S. Katz", "Olga Kuchar", "Ana Kupresanin", "Bertram Ludascher", "Ketan Maheshwari", "Marta Mattoso", "Kshitij Mehta", "Todd Munson", "Jonathan Ozik", "Tom Peterka", "Loic Pottier", "Tim Randles", "Stian Soiland-Reyes", "Benjamin Tovar", "Matteo Turilli", "Thomas Uram", "Karan Vahi", "Michael Wilde", "Matthew Wolf", "Justin Wozniak"],
        "links": {
            "pdf": "https://arxiv.org/pdf/2103.09181"
        },
        "abstract": ("Scientific workflows have been used almost universally across scientific domains, and have underpinned some of the most significant discoveries of the past several decades. Many of these workflows have high computational, storage, and/or communication demands, and thus must execute on a wide range of large-scale platforms, from large clouds to upcoming exascale high-performance computing (HPC) platforms. These executions must be managed using some software infrastructure. Due to the popularity of workflows, workflow management systems (WMSs) have been developed to provide abstractions for creating and executing workflows conveniently, efficiently, and portably. While these efforts are all worthwhile, there are now hundreds of independent WMSs, many of which are moribund. As a result, the WMS landscape is segmented and presents significant barriers to entry due to the hundreds of seemingly comparable, yet incompatible, systems that exist. As a result, many teams, small and large, still elect to build their own custom workflow solution rather than adopt, or build upon, existing WMSs. This current state of the WMS landscape negatively impacts workflow users, developers, and researchers. The 'Workflows Community Summit' was held online on January 13, 2021. The overarching goal of the summit was to develop a view of the state of the art and identify crucial research challenges in the workflow community. Prior to the summit, a survey sent to stakeholders in the workflow community (including both developers of WMSs and users of workflows) helped to identify key challenges in this community that were translated into 6 broad themes for the summit, each of them being the object of a focused discussion led by a volunteer member of the community. This report documents and organizes the wealth of information provided by the participants before, during, and after the summit.")
    },
    {
        "title": "WorkflowHub: Community Framework for Enabling Scientific Workflow Research and Development",
        "venue": "2020 IEEE/ACM Workflows in Support of Large-Scale Science (WORKS)",
        "authors": ["Rafael Ferreira da Silva", "Loïc Pottier", "Tainã Coleman", "Ewa Deelman", "Henri Casanova"],
        "links": {
            "pdf": "https://pegasus.isi.edu/wordpress/wp-content/papercite-data/pdf/ferreiradasilva2020works.pdf",
            "github": "https://github.com/wfcommons/wfcommons",
        },
        "abstract": ("Scientific workflows are a cornerstone of modern scientific computing. They are used to describe complex computational applications that require efficient and robust management of large volumes of data, which are typically stored/processed on heterogeneous, distributed resources. The workflow research and development community has employed a number of methods for the quantitative evaluation of existing and novel workflow algorithms and systems. In particular, a common approach is to simulate workflow executions. In previous work, we have presented a collection of tools that have been used for aiding research and development activities in the Pegasus project, and that have been adopted by others for conducting workflow research. Despite their popularity, there are several shortcomings that prevent easy adoption, maintenance, and consistency with the evolving structures and computational requirements of production workflows. In this work, we present WorkflowHub, a community framework that provides a collection of tools for analyzing workflow execution traces, producing realistic synthetic workflow traces, and simulating workflow executions. We demonstrate the realism of the generated synthetic traces by comparing simulated executions of these traces with actual workflow executions. We also contrast these results with those obtained when using the previously available collection of tools. We find that our framework not only can be used to generate representative synthetic workflow traces (i.e., with workflow structures and task characteristics distributions that resemble those in traces obtained from real-world workflow executions), but can also generate representative workflow traces at larger scales than that of available workflow traces.")
    },
    {
        "title": "WfChef: Automated Generation of Accurate Scientific Workflow Generators",
        "venue": "17th IEEE eScience 2021",
        "authors": ["Tainã Coleman", "Henri Casanova", "Rafael Ferreira da Silva"],
        "links": {
            "pdf": "https://arxiv.org/pdf/2105.00129",
            "github": "https://github.com/Tainãgdcoleman/wfchef"
        },
        "abstract": ("Scientific workflow applications have become mainstream and their automated and efficient execution on large-scale compute platforms is the object of extensive research and development. For these efforts to be successful, a solid experimental methodology is needed to evaluate workflow algorithms and systems. A foundation for this methodology is the availability of realistic workflow instances. Dozens of workflow instances for a few scientific applications are available in public repositories. While these are invaluable, they are limited: workflow instances are not available for all application scales of interest. To address this limitation, previous work has developed generators of synthetic, but representative, workflow instances of arbitrary scales. These generators are popular, but implementing them is a manual, labor-intensive process that requires expert application knowledge. As a result, these generators only target a handful of applications, even though hundreds of applications use workflows in production."
        "In this work, we present WfChef, a framework that fully automates the process of constructing a synthetic workflow generator for any scientific application. Based on an input set of workflow instances, WfChef automatically produces a synthetic workflow generator. We define and evaluate several metrics for quantifying the realism of the generated workflows. Using these metrics, we compare the realism of the workflows generated by WfChef generators to that of the workflows generated by the previously available, hand-crafted generators. We find that the WfChef generators not only require zero development effort (because it is automatically produced), but also generate workflows that are more realistic than those generated by hand-crafted generator.")
    },
    {
        "title": "A biometric for shark dorsal fins based on boundary descriptor matching",
        "venue": "CAINE: Computer Applications in Industry and Engineering (2019)",
        "authors": ["Tainã Coleman", "Ju Cheol Moon"],
        "links": {
            "pdf": "https://easychair.org/publications/open/1Rr8",
            "github": "https://github.com/Tainãgdcoleman/sharkid"
        },
        "abstract": ("Recent progress in animal biometrics has revolutionized wildlife research. Cutting edge techniques allow researchers to track individuals through noninvasive methods of recognition that are not only more reliable, but also applicable to large, hard-to-find, and otherwise difficult to observe animals. In this research, we propose a metric for boundary descriptors based on bipartite perfect matching applied in shark dorsal fins. In order to identify a shark, we first take a fin contour and transform it to a normalized coordinate system so that we can analyze images of sharks regardless of orientation and scale. Finally, we propose a metric scheme that performs a minimum weight perfect matching in a bipartite graph. The experimental results show that our metric is applicable to identify and track individuals from visual data.")
    }
]

projects = [
    {
        "name": 'WfCommons',
        "links": {
            'youtube': 'https://www.youtube.com/watch?v=3LhcWa-T3MQ',
            'github': 'https://www.github.com',
            'wfcommons': "https://wfcommons.org"
        },
        "description": (
            "<Col><p>WfCommons is a framework for enabling scientific workflow research and development. It provides foundation tools for analyzing workflow execution instances, generating workflow recipes, and generating synthetic, yet realistic, workflow instances. The synthetic instances can then be used to develop new techniques, algorithms and systems that can overcome the challenges of efficient and robust execution of ever larger workflows on increasingly complex distributed infrastructures.</p>"
            "<p>My first contribution to this project is the component called <b>WfChef</b> which is responsible for detecting patterns in the structure of sample graphs to generate the synthetic graphs. WfChef brought scalability to WfCommons by allowing the framework to be used by any workflow application and generate synthetic instances of any size.</p>"
            "<p>Followed by <b>WfChef</b> and using its recipes, I develop <b>WfBench</b> which is benchmark generator for scientific workflows. WfBench is a tool that generates scientific workflows benchmarks based on real-world workflow instances. It is designed to allow for extensive customization of the tasks and the workflow structure and it can be used to evaluate the performance of workflow management systems, and to evaluate the performance of workflow algorithms and techniques.</p></Col>")  
    }
]
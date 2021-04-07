# проверка моей ветки! не мастер
import networkx as nx
import matplotlib.pyplot as plt
import numpy as np
import nxviz as nv 
import json
# from nxviz import annotate

with open('investments.json', 'r') as file:
    data = json.load(file)

G = nx.Graph() # создание графа

for project in data['projects']:
    G.add_node(project['id'], label=project['name'], weight=project['amount'], region=project['area'])
    print(G.nodes()) #почему-то сбивается, но результат выходит нормальным! 
    if len(project['links']) > 0:
        for link in project['links']:
            G.add_edge(project['id'], link)

print(list(G.nodes(data=True)))
# print(list(G.edges())) 

nx.draw(G, with_labels=True)
# nx.draw(G)
plt.show()


# Из игры престолов визуализация, только надо еще pip install scipy
# pos = nx.kamada_kawai_layout(G)
# nx.draw_networkx_nodes(G, pos, node_color='yellow', node_size=10)
# nx.draw_networkx_edges(G, pos, edge_color='green', width=0.2)
# nx.draw_networkx_labels(G, pos, font_size=7, font_family='Arial')
# plt.axis('off')
# plt.show()